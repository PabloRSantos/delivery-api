import { Router } from 'express';
import { adaptMiddleware, adaptRoute } from './adapters';
import {
  makeEnsureAuthenticatedDeliverymanMiddleware,
  makeEnsureAuthenticatedMiddleware,
} from './middlewares';
import {
  makeAuthenticateClientController,
  makeAuthenticateDeliverymanController,
} from './modules/accounts/use-cases';
import { makeCreateClientController } from './modules/clients/use-cases';
import {
  makeCreateDeliveryController,
  makeFindAllAvailableController,
  makeUpdateDeliverymanController,
} from './modules/deliveries/use-cases';
import { makeCreateDeliverymanController } from './modules/deliveryman/use-cases';

const routes = Router();

routes.post('/deliveryman', adaptRoute(makeCreateDeliverymanController()));
routes.post(
  '/deliveryman/authenticate',
  adaptRoute(makeAuthenticateDeliverymanController()),
);
routes.post('/client', adaptRoute(makeCreateClientController()));
routes.post(
  '/client/authenticate',
  adaptRoute(makeAuthenticateClientController()),
);
routes.post(
  '/delivery',
  adaptMiddleware(makeEnsureAuthenticatedMiddleware()),
  adaptRoute(makeCreateDeliveryController()),
);
routes.get(
  '/delivery/available',
  adaptMiddleware(makeEnsureAuthenticatedDeliverymanMiddleware()),
  adaptRoute(makeFindAllAvailableController()),
);
routes.put(
  '/delivery/update-deliveryman/:id',
  adaptMiddleware(makeEnsureAuthenticatedDeliverymanMiddleware()),
  adaptRoute(makeUpdateDeliverymanController()),
);

export { routes };
