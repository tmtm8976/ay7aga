import { Elysia } from 'elysia';
import { db } from './db';
import { snippets } from './db/schema';

const app = new Elysia()
  .get('/', () => Bun.file('./src/views/index.html'))
  .post('/', async ({ body }: any) => {
    console.log(body.post);
    await db.insert(snippets).values({ content: body.post });
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
