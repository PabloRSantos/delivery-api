import { HttpResponse, IController } from '../../../../protocols';
import { FindAllAvailableUseCase } from './find-all-available-use-case';

export class FindAllAvailableController implements IController {
  constructor(private readonly findAllAvailableUseCase: FindAllAvailableUseCase) {}

  async handle(): Promise<HttpResponse> {
    const deliveries = await this.findAllAvailableUseCase.execute();

    return {
      statusCode: 201,
      body: deliveries,
    };
  }
}
