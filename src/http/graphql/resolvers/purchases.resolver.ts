import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '../../auth/authorization.guard';
import { PurchasesServices } from 'src/services/purchases.services';
import { Purchase } from '../models/purchase';
import { Product } from '../models/product';
import { ProductsServices } from 'src/services/products.services';

@Resolver(() => Purchase)
export class PurchasesResolver {
  constructor(
    private purchasesService: PurchasesServices,
    private productsServices: ProductsServices,
  ) {}

  @UseGuards(AuthorizationGuard)
  @Query(() => [Purchase])
  purchases() {
    return this.purchasesService.listAllPurchases();
  }

  @ResolveField(() => Product)
  product(@Parent() purchase: Purchase) {
    return this.productsServices.getProductById(purchase.productId);
  }
}
