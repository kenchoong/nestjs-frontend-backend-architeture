import { Controller, Get, Post, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('cart')
export class CartController {
  @Inject('CART_SERVICE')
  private readonly cartServiceClient: ClientProxy;

  @Post('add')
  createPaymentIntent() {
    return 'create intent';
  }

  @Get()
  getCart() {
    return 'get cart';
  }
}
