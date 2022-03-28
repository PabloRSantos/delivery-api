import { IController } from '../../../protocols';
import { CreateClientController } from './create-client-controller';
import { CreateClientUseCase } from './create-client-use-case';

export const makeCreateClientController = (): IController => {
  const createClientUseCase = new CreateClientUseCase();
  return new CreateClientController(createClientUseCase);
};
