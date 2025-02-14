import { Hono } from 'hono'

const app = new Hono()

Bun.serve({
  fetch: (req) => {
    return new Response("Hello from Bun!")
  },
  port: process.env.PORT || 3000
})