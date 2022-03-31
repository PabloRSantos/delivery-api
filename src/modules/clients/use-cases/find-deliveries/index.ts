import { IController } from '../../../../protocols';
import { FindDeliveriesController } from './find-deliveries-controller';
import { FindDeliveriesUseCase } from './find-deliveries-use-case';

export const makeFindDeliveriesController = (): IController => {
  const findDeliveriesUseCase = new FindDeliveriesUseCase();

  return new FindDeliveriesController(findDeliveriesUseCase);
};
