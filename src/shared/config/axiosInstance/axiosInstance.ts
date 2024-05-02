import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://localhost:5173/api',
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:5173',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
})
