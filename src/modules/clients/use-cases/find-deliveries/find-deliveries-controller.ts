import { HttpRequest, HttpResponse, IController } from '../../../../protocols';
import { FindDeliveriesUseCase } from './find-deliveries-use-case';

export class FindDeliveriesController implements IController {
  constructor(private readonly findDeliveriesUseCase: FindDeliveriesUseCase) {}

  async handle(data: HttpRequest): Promise<HttpResponse> {
    const deliveries = await this.findDeliveriesUseCase.execute({ id_client: data.id_client as string });

    return {
      body: deliveries,
      statusCode: 201,
    };
  }
}
