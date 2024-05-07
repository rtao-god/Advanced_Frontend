import { createServer, Model } from 'miragejs'

interface UserProfile {
  name: string
}

interface User {
  id: string
  username: string
  password: string
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

      server.create('user', { id: '1', username: 'admin', password: '111' })
      server.create('user', { id: '2', username: 'admin2', password: '222' })
      server.create('user', { id: '3', username: 'admin3', password: '333' })

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
        const user = schema.users.findBy({ username: attrs.username, password: attrs.password })

        if (user) {
          return { id: user.id, username: user.username }
        } else {
          return new Response(401, {}, { error: 'Invalid username or password' })
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
        const attrs = JSON.parse(request.requestBody);
        return schema.users.create(attrs);
      });
    },
  })

  return server
}
