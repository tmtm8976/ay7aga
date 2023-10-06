import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/', () => Bun.file('./src/views/index.html'))
  .post('/', ({ body }) => {
    console.log("posted: ",body);
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
