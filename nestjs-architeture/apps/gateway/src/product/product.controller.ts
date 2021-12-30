import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  @Inject('PRODUCT_SERVICE')
  private readonly productServiceClient: ClientProxy;

  @Get()
  getProductList() {
    return 'Get product list';
  }

  @Get()
  getProductById() {
    return 'get product by id';
  }
}
