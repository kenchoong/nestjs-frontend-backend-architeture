import { Controller, Post, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('stripe')
export class StripeController {
  @Inject('STRIPE_SERVICE')
  private readonly stripeServiceClient: ClientProxy;

  @Post('payment-intent')
  createPaymentIntent() {
    return 'create intent';
  }
}
