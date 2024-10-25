import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: builder => ({
        getPosts: builder.query<any, void>({
            query: () => 'posts?_limit=10'
        }),

        updateCounter: builder.mutation<any, { id: number; counter: number }>({
            query: ({ id, counter }) => ({
                url: `posts/${id}`,
                method: 'PATCH',
                body: { counter }
            })
        })
    })
})

export const { useGetPostsQuery, useUpdateCounterMutation } = api
