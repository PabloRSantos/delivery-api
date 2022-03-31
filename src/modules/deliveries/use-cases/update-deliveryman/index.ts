import { IController } from '../../../../protocols';
import { UpdateDeliveryManController } from './update-deliveryman-controller';
import { UpdateDeliveryManUseCase } from './update-deliveryman-use-case';

export const makeUpdateDeliverymanController = (): IController => {
  const updateDeliverymanUseCase = new UpdateDeliveryManUseCase();

  return new UpdateDeliveryManController(updateDeliverymanUseCase);
};
