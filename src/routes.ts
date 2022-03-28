import { Router } from 'express';
import { adaptMiddleware, adaptRoute } from './adapters';
import { makeEnsureAuthenticatedMiddleware } from './middlewares';
import { makeAuthenticateClientController, makeAuthenticateDeliverymanController } from './modules/accounts/use-cases';
import { makeCreateClientController } from './modules/clients/use-cases';
import { makeCreateDeliveryController } from './modules/deliveries/use-cases';
import { makeCreateDeliverymanController } from './modules/deliveryman/use-cases';

const routes = Router();

routes.post('/deliveryman', adaptRoute(makeCreateDeliverymanController()));
routes.post('/deliveryman/authenticate', adaptRoute(makeAuthenticateDeliverymanController()));
routes.post('/client', adaptRoute(makeCreateClientController()));
routes.post('/client/authenticate', adaptRoute(makeAuthenticateClientController()));
routes.post('/delivery', adaptMiddleware(makeEnsureAuthenticatedMiddleware()), adaptRoute(makeCreateDeliveryController()));

export { routes };
