import { Router } from 'express';
import { adaptRoute } from './adapters';
import { makeCreateClientController } from './modules/clients/use-cases';

const routes = Router();

routes.post('/client', adaptRoute(makeCreateClientController()));

export { routes };
