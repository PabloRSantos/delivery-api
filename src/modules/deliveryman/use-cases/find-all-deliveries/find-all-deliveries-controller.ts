import { HttpRequest, HttpResponse, IController } from '../../../../protocols';
import { FindAllDeliveriesUseCase } from './find-all-deliveries-use-case';

export class FindAllDeliveriesController implements IController {
  constructor(private readonly findAllDeliveriesUseCase: FindAllDeliveriesUseCase) {}

  async handle(data: HttpRequest): Promise<HttpResponse> {
    const deliveries = await this.findAllDeliveriesUseCase.execute({ id_deliveryman: data.id_deliveryman as string });

    return {
      body: deliveries,
      statusCode: 201,
    };
  }
}
