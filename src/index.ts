import { Elysia } from 'elysia';
import { appRouter } from './routes/router';

const app = new Elysia().use(appRouter).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
