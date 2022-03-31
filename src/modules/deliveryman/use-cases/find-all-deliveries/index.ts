import { IController } from '../../../../protocols';
import { FindAllDeliveriesController } from './find-all-deliveries-controller';
import { FindAllDeliveriesUseCase } from './find-all-deliveries-use-case';

export const makeFindAllDeliveriesController = (): IController => {
  const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();

  return new FindAllDeliveriesController(findAllDeliveriesUseCase);
};
