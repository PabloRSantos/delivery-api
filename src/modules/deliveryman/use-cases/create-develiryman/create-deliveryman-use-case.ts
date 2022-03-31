import { hash } from 'bcrypt';
import { AppError } from '../../../../appError';
import { prisma } from '../../../../database/prismaClient';

interface ICreateDeliveryman {
    username: string
    password: string
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliveryman) {
    const deliverymanExist = await prisma.deliveryMan.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    if (deliverymanExist) {
      throw new AppError('Entregador já existe', 400);
    }

    const hashPassword = await hash(password, 10);

    const deliveryman = await prisma.deliveryMan.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return deliveryman;
  }
}
