import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { EventPattern, ClientProxy } from '@nestjs/microservices';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @EventPattern('get_order_list')
  getOrder(): string {
    return 'get order list';
  }

  @EventPattern('get_order_list')
  createOrder(): string {
    return 'Create order';
  }
}
