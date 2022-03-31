import { HttpRequest, HttpResponse, IController } from '../../../../protocols';
import { UpdateEndDateUseCase } from './update-end-date-use-case';

export class UpdateEndDateController implements IController {
  constructor(private readonly updateEndDateUseCase: UpdateEndDateUseCase) {}

  async handle(data: HttpRequest): Promise<HttpResponse> {
    const { id: id_delivery } = data.params;
    const result = await this.updateEndDateUseCase.execute({
      id_delivery,
      id_deliveryman: data.id_deliveryman as string,
    });

    return {
      statusCode: 201,
      body: result,
    };
  }
}
