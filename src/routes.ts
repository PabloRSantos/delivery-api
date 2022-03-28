import { Router } from 'express';
import { adaptRoute } from './adapters';
import { makeAuthenticateClientController } from './modules/accounts/use-cases';
import { makeCreateClientController } from './modules/clients/use-cases';
import { makeCreateDeliverymanController } from './modules/deliveryman/use-cases';

const routes = Router();

routes.post('/deliveryman', adaptRoute(makeCreateDeliverymanController()));
routes.post('/client', adaptRoute(makeCreateClientController()));
routes.post('/authenticate', adaptRoute(makeAuthenticateClientController()));

export { routes };
