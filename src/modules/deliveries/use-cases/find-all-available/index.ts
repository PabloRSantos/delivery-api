import { IController } from '../../../../protocols';
import { FindAllAvailableController } from './find-all-available-controller';
import { FindAllAvailableUseCase } from './find-all-available-use-case';

export const makeFindAllAvailableController = (): IController => {
  const findAllAvailableUseCase = new FindAllAvailableUseCase();

  return new FindAllAvailableController(findAllAvailableUseCase);
};
