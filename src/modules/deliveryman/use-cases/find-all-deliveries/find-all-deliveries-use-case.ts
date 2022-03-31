import { prisma } from '../../../../database/prismaClient';

interface IFindAllDeliveriesUseCase {
    id_deliveryman: string
}

export class FindAllDeliveriesUseCase {
  async execute({ id_deliveryman }: IFindAllDeliveriesUseCase) {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        id_deliveryman,
      },
    });

    return deliveries;
  }
}
