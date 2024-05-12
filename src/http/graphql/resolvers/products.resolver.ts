import { Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '../../auth/authorization.guard';
import { Product } from '../models/product';
import { ProductsServices } from 'src/services/products.services';

@Resolver()
export class ProductsResolver {
  constructor(private productsServices: ProductsServices) {}

  @Query(() => [Product])
  @UseGuards(AuthorizationGuard)
  async products() {
    return this.productsServices.listAllProducts();
  }
}
