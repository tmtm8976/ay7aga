import { Elysia } from 'elysia';
import { appHandlers } from './handlers';

const routes = new Elysia().get('/', () => Bun.file('./src/views/index.html'));

export const appRouter = new Elysia().use(routes).use(appHandlers);
