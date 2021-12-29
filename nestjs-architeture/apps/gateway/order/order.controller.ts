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

  @Post()
  createOrder(): string {
    return 'create order';
  }
}
