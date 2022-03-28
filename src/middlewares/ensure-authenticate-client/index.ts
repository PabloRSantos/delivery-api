import { IMiddleware } from '../../protocols';
import { EnsureAuthenticated } from './ensure-authenticate-client-middleware';

export const makeEnsureAuthenticatedMiddleware = (): IMiddleware => new EnsureAuthenticated();
