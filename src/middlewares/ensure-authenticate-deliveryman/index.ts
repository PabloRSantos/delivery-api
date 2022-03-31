import { IMiddleware } from '../../protocols';
import { EnsureAuthenticatedDeliveryman } from './ensure-authenticate-deliveryman-middleware';

export const makeEnsureAuthenticatedDeliverymanMiddleware = (): IMiddleware => new EnsureAuthenticatedDeliveryman();
