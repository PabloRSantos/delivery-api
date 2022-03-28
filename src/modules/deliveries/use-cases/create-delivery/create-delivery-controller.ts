import { HttpRequest, HttpResponse, IController } from '../../../../protocols';
import { CreateDeliveryUseCase } from './create-delivery-use-case';

export class CreateDeliveryController implements IController {
  constructor(private readonly createDeliveryUseCase: CreateDeliveryUseCase) {}

  async handle(data: HttpRequest): Promise<HttpResponse> {
    const { item_name, id_client } = data.body;

    const delivery = await this.createDeliveryUseCase.execute({ item_name, id_client });

    return {
      statusCode: 201,
      body: delivery,
    };
  }
}
