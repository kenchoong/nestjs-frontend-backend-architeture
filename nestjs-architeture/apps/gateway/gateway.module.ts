import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '@common/environment';
import { LoggerModule } from '@common/logger';
import { ExceptionsModule } from '@common/exceptions';
import { TypeormModule } from '@common/typeorm';

import { StripeController } from './stripe/stripe.controller';
import { ProductController } from './product/product.controller';
import { OrderController } from './order/order.controller';
import { CartController } from './cart/cart.controller';

import { ConfigService } from './config/config.service';
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  imports: [
    EnvironmentConfigModule,
    LoggerModule,
    ExceptionsModule,
    TypeormModule,
  ],
  controllers: [
    StripeController,
    ProductController,
    CartController,
    OrderController,
  ],
  providers: [
    ConfigService,
    {
      provide: 'PRODUCT_SERVICE',
      useFactory: (configService: ConfigService) => {
        const productServiceOptions = configService.get('productService');
        return ClientProxyFactory.create(productServiceOptions);
      },
      inject: [ConfigService],
    },
    {
      provide: 'STRIPE_SERVICE',
      useFactory: (configService: ConfigService) => {
        const stripeServiceOptions = configService.get('stripeService');
        return ClientProxyFactory.create(stripeServiceOptions);
      },
      inject: [ConfigService],
    },
    {
      provide: 'CART_SERVICE',
      useFactory: (configService: ConfigService) => {
        const cartServiceOptions = configService.get('cartService');
        return ClientProxyFactory.create(cartServiceOptions);
      },
      inject: [ConfigService],
    },
    {
      provide: 'ORDER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const orderServiceOptions = configService.get('orderService');
        return ClientProxyFactory.create(orderServiceOptions);
      },
      inject: [ConfigService],
    },
  ],
})
export class GatewayModule {}
