import { HttpRequest, HttpResponse, IController } from '../../../../protocols';
import { AuthenticateDeliverymanUseCase } from './authenticate-deliveryman-use-case';

export class AuthenticateDeliverymanController implements IController {
  constructor(private readonly authenticateDeliverymanUseCase: AuthenticateDeliverymanUseCase) {}

  async handle(data: HttpRequest): Promise<HttpResponse> {
    const { username, password } = data.body;

    const result = await this.authenticateDeliverymanUseCase.execute({
      username,
      password,
    });

    return {
      statusCode: 201,
      body: result,
    };
  }
}
