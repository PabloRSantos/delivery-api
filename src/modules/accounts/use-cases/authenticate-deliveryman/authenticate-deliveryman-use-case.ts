import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../appError';
import { prisma } from '../../../../database/prismaClient';

interface IAuthenticateDeliveryman {
  username: string
  password: string
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryMan.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new AppError('Usuário ou senha incorretas', 400);
    }

    const passwordMatch = await compare(password, deliveryman.password);
    if (!passwordMatch) {
      throw new AppError('Usuário ou senha incorretas', 400);
    }

    const token = sign({ username }, 'deliveryman-secret', {
      subject: deliveryman.id,
      expiresIn: '1d',
    });

    return { token };
  }
}
