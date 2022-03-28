import { HttpRequest, HttpResponse, IController } from '../../../protocols';
import { CreateClientUseCase } from './create-client-use-case';

export class CreateClientController implements IController {
  constructor(private readonly createClientUseCase: CreateClientUseCase) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { username, password } = httpRequest.body;

    const client = await this.createClientUseCase.execute({ username, password });

    return {
      statusCode: 201,
      body: client,
    };
  }
}
