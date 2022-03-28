import { Router } from 'express';
import { adaptRoute } from './adapters';
import { makeAuthenticateClientController, makeAuthenticateDeliverymanController } from './modules/accounts/use-cases';
import { makeCreateClientController } from './modules/clients/use-cases';
import { makeCreateDeliverymanController } from './modules/deliveryman/use-cases';

const routes = Router();

routes.post('/deliveryman', adaptRoute(makeCreateDeliverymanController()));
routes.post('/deliveryman/authenticate', adaptRoute(makeAuthenticateDeliverymanController()));
routes.post('/client', adaptRoute(makeCreateClientController()));
routes.post('/client/authenticate', adaptRoute(makeAuthenticateClientController()));

export { routes };
