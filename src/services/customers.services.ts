import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { Customer } from '@prisma/client';

interface CreateCustomerParams {
  authUserId: string;
}

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  getCustomerByAuthUserId(authUserId: string): Promise<Customer> {
    return this.prisma.customer.findUnique({
      where: {
        authUserId,
      },
    });
  }

  async createCustomer({
    authUserId,
  }: CreateCustomerParams): Promise<Customer> {
    return this.prisma.customer.create({
      data: {
        authUserId,
      },
    });
  }
}
