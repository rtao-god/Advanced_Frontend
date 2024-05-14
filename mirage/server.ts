import { User } from '@/entities/User'
import { createServer, Model } from 'miragejs'

interface UserProfile {
  name: string
}

interface Post {
  id: string
  title: string
  author: string
}

interface Comment {
  id: string
  body: string
  postId: string
}

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      post: Model.extend<Partial<Post>>({}),
      comment: Model.extend<Partial<Comment>>({}),
      user: Model.extend<Partial<User>>({}),
      profile: Model.extend<Partial<UserProfile>>({}),
    },

    seeds(server) {
      server.create('profile', { name: 'typicode' })

      server.create('user', { id: '1', identifier: 'admin@gmail.com', password: '1111' })
      server.create('user', { id: '2', identifier: 'admin2@gmail.com', password: '2222' })
      server.create('user', { id: '3', identifier: 'admin3@gmail.com', password: '3333' })

      server.create('post', { id: '1', title: 'json-server', author: 'typicode' })

      server.create('comment', { id: '1', body: 'some comment', postId: '1' })
    },

    routes() {
      this.namespace = 'api'

      this.get('/posts', schema => {
        return schema.all('post')
      })

      this.get('/comments', schema => {
        return schema.all('comment')
      })

      this.get('/users', schema => {
        return schema.all('user')
      })

      this.get('/profile', schema => {
        return schema.all('profile')
      })

      this.post('/login', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        const user = schema.users.findBy({ id: attrs.id, identifier: attrs.identifier, password: attrs.password })

        if (user) {
          return { id: user.id, identifier: user.username }
        } else {
          return new Response(401, {}, { error: 'Invalid identifier or password' })
        }
      })

      this.get('/users/:id', (schema, request) => {
        let id = request.params.id
        let user = schema.users.find(id)

        if (user) {
          return user.attrs
        } else {
          return new Response(404, {}, { error: 'User not found' })
        }
      })

      this.post('/users/', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        console.log('Received in POST /users/:', attrs) 
        return schema.users.create(attrs)
      })
    },
  })

  return server
}
