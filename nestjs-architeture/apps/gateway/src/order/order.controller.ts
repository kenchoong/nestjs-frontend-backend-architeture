import {
  Controller,
  Post,
  Put,
  Get,
  Body,
  Inject,
  Param,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('order')
export class OrderController {
  @Inject('ORDER_SERVICE')
  private readonly orderServiceClient: ClientProxy;

  @Get()
  getOrder(): string {
    return 'get order';
  }

  @Get('/:orderId')
  getOrderById(@Param('orderId') orderId: string): string {
    return `get order ${orderId}`;
  }

  @Post()
  createOrder(): string {
    return 'create order';
  }
}
