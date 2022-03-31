import { HttpRequest, HttpResponse, IController } from '../../../../protocols';
import { UpdateDeliveryManUseCase } from './update-deliveryman-use-case';

export class UpdateDeliveryManController implements IController {
  constructor(private readonly updateDeliverymanUseCase: UpdateDeliveryManUseCase) {}

  async handle(data: HttpRequest): Promise<HttpResponse> {
    const { id: id_delivery } = data.params;
    const result = await this.updateDeliverymanUseCase.execute({
      id_delivery,
      id_deliveryman: data.id_deliveryman as string,
    });

    return {
      statusCode: 201,
      body: result,
    };
  }
}
