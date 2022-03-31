import { prisma } from '../../../../database/prismaClient';

interface IFindDeliveriesUseCase {
    id_client: string
}

export class FindDeliveriesUseCase {
  async execute({ id_client }: IFindDeliveriesUseCase) {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        id_client,
      },
    });

    return deliveries;
  }
}
