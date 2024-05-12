import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsServices {
  constructor(private prisma: PrismaService) {}

  listAllProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }
}
