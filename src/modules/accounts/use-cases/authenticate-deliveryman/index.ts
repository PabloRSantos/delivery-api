import { IController } from '../../../../protocols';
import { AuthenticateDeliverymanController } from './authenticate-deliveryman-controller';
import { AuthenticateDeliverymanUseCase } from './authenticate-deliveryman-use-case';

export const makeAuthenticateDeliverymanController = (): IController => {
  const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();

  return new AuthenticateDeliverymanController(authenticateDeliverymanUseCase);
};
