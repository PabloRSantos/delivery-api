import { IController } from '../../../../protocols';
import { AuthenticateClientController } from './authenticate-client-controller';
import { AuthenticateClientUseCase } from './authenticate-client-use-case';

export const makeAuthenticateClientController = (): IController => {
  const authenticateClientUseCase = new AuthenticateClientUseCase();

  return new AuthenticateClientController(authenticateClientUseCase);
};
