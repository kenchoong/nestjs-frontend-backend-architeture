import { Controller, Get } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller()
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Get()
  getHello(): string {
    return this.stripeService.getHello();
  }
}
