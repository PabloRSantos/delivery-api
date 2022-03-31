import { hash } from 'bcrypt';
import { AppError } from '../../../../appError';
import { prisma } from '../../../../database/prismaClient';

interface ICreateClient {
    username: string
    password: string
}

export class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    if (clientExist) {
      throw new AppError('Cliente já existe', 400);
    }

    const hashPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}
