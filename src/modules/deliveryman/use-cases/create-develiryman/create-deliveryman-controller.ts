import { IController, HttpRequest, HttpResponse } from '../../../../protocols';
import { CreateDeliverymanUseCase } from './create-deliveryman-use-case';

export class CreateDeliverymanController implements IController {
  constructor(private readonly createDeliverymanUseCase: CreateDeliverymanUseCase) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { username, password } = httpRequest.body;

    const deliveryman = await this.createDeliverymanUseCase.execute({ username, password });

    return {
      statusCode: 201,
      body: deliveryman,
    };
  }
}
