import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { Purchase } from '@prisma/client';

@Injectable()
export class PurchasesServices {
  constructor(private prisma: PrismaService) {}

  listAllPurchases(): Promise<Purchase[]> {
    return this.prisma.purchase.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
