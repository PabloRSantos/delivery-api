import { IController } from '../../../../protocols';
import { CreateDeliverymanController } from './create-deliveryman-controller';
import { CreateDeliverymanUseCase } from './create-deliveryman-use-case';

export const makeCreateDeliverymanController = (): IController => {
  const createDeliverymanUseCase = new CreateDeliverymanUseCase();
  return new CreateDeliverymanController(createDeliverymanUseCase);
};
