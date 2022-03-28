import { IController } from '../../../../protocols';
import { CreateDeliveryController } from './create-delivery-controller';
import { CreateDeliveryUseCase } from './create-delivery-use-case';

export const makeCreateDeliveryController = (): IController => {
  const createDeliveryUseCase = new CreateDeliveryUseCase();

  return new CreateDeliveryController(createDeliveryUseCase);
};
