import { IController } from '../../../../protocols';
import { UpdateEndDateController } from './update-end-date-controller';
import { UpdateEndDateUseCase } from './update-end-date-use-case';

export const makeUpdateEndDateController = (): IController => {
  const updateEndDateUseCase = new UpdateEndDateUseCase();

  return new UpdateEndDateController(updateEndDateUseCase);
};
