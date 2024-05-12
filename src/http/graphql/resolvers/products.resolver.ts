import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '../../auth/authorization.guard';
import { Product } from '../models/product';
import { ProductsServices } from 'src/services/products.services';
import { CreateProductInput } from '../inputs/create-product-input';

@Resolver()
export class ProductsResolver {
  constructor(private productsServices: ProductsServices) {}

  @Query(() => [Product])
  products() {
    return this.productsServices.listAllProducts();
  }

  @UseGuards(AuthorizationGuard)
  @Mutation(() => Product)
  createProduct(@Args('data') data: CreateProductInput) {
    return this.productsServices.createProduct(data);
  }
}
