import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../appError';
import { prisma } from '../../../../database/prismaClient';

interface IAuthenticateClient {
  username: string
  password: string
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new AppError('Usuário ou senha incorretas', 400);
    }

    const passwordMatch = await compare(password, client.password);
    if (!passwordMatch) {
      throw new AppError('Usuário ou senha incorretas', 400);
    }

    const token = sign({ username }, 'secret', {
      subject: client.id,
      expiresIn: '1d',
    });

    return { token };
  }
}
