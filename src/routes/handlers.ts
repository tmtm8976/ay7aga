import { Elysia } from 'elysia';

import { db } from '../db';
import { snippets } from '../db/schema';

const createPost = new Elysia().post('/', async ({ body }: any) => {
  console.log(body.post);
  await db.insert(snippets).values({ content: body.post });
});

const test = new Elysia().get('/test', () => 'test');

export const appHandlers = new Elysia().use(createPost).use(test);
