import { HttpRequest, HttpResponse, IController } from '../../../../protocols';
import { AuthenticateClientUseCase } from './authenticate-client-use-case';

export class AuthenticateClientController implements IController {
  constructor(private readonly authenticateClientUseCase: AuthenticateClientUseCase) {}

  async handle(data: HttpRequest): Promise<HttpResponse> {
    const { username, password } = data.body;

    const result = await this.authenticateClientUseCase.execute({
      username,
      password,
    });

    return {
      statusCode: 201,
      body: result,
    };
  }
}
