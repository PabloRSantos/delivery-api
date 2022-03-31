import { verify } from 'jsonwebtoken';
import { AppError } from '../../appError';
import { prisma } from '../../database/prismaClient';
import { HttpRequest, HttpResponse, IMiddleware } from '../../protocols';

export class EnsureAuthenticatedDeliveryman implements IMiddleware {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const authHeader = httpRequest.headers.authorization;

    if (!authHeader) {
      throw new AppError('Token é obrigatório', 400);
    }

    const [, token] = authHeader.split(' ');

    let id_deliveryman = '';
    try {
      const { sub } = verify(token, 'deliveryman-secret');
      id_deliveryman = sub as string;
    } catch (error) {
      throw new AppError('Token inválido', 401);
    }

    const userExist = await prisma.deliveryMan.findFirst({
      where: {
        id: id_deliveryman,
      },
    });

    if (!userExist) {
      throw new AppError('Usuário não encontrado', 404);
    }

    return {
      statusCode: 201,
      body: { id_deliveryman },
    };
  }
}
