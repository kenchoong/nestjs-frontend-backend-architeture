import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '@common/environment';
import { LoggerModule } from '@common/logger';
import { ExceptionsModule } from '@common/exceptions';
import { TypeormModule } from '@common/typeorm';

import { StripeController } from './stripe/stripe.controller';
import { ProductController } from './product/product.controller';
import { OrderController } from './order/order.controller';
import { CartController } from './cart/cart.controller';

import { ClientProxyFactory } from '@nestjs/microservices';

import {
  AppServiceEnvironmentConfigModule,
  AppServiceEnvironmentConfigService,
} from '@common/app-service-environment-config';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    AppServiceEnvironmentConfigModule,
    EnvironmentConfigModule,
    LoggerModule,
    ExceptionsModule,

    //TypeormModule
  ],
  controllers: [
    StripeController,
    ProductController,
    CartController,
    OrderController,
  ],
  providers: [
    ConfigService,
    AppServiceEnvironmentConfigService,
    {
      provide: 'PRODUCT_SERVICE',
      useFactory: (
        appServiceEnvironmentConfigService: AppServiceEnvironmentConfigService,
      ) => {
        const productServiceOptions =
          appServiceEnvironmentConfigService.getProductServiceOption();
        return ClientProxyFactory.create(productServiceOptions);
      },
      inject: [AppServiceEnvironmentConfigService, ConfigService],
    },
    {
      provide: 'STRIPE_SERVICE',
      useFactory: (
        appServiceEnvironmentConfigService: AppServiceEnvironmentConfigService,
      ) => {
        const stripeServiceOptions =
          appServiceEnvironmentConfigService.getStripeServiceOption();
        return ClientProxyFactory.create(stripeServiceOptions);
      },
      inject: [AppServiceEnvironmentConfigService, ConfigService],
    },
    {
      provide: 'CART_SERVICE',
      useFactory: (
        appServiceEnvironmentConfigService: AppServiceEnvironmentConfigService,
      ) => {
        const cartServiceOptions =
          appServiceEnvironmentConfigService.getCartServiceOption();
        return ClientProxyFactory.create(cartServiceOptions);
      },
      inject: [AppServiceEnvironmentConfigService],
    },
    {
      provide: 'ORDER_SERVICE',
      useFactory: (
        appServiceEnvironmentConfigService: AppServiceEnvironmentConfigService,
      ) => {
        const orderServiceOptions =
          appServiceEnvironmentConfigService.getOrderServiceOption();
        return ClientProxyFactory.create(orderServiceOptions);
      },
      inject: [AppServiceEnvironmentConfigService, ConfigService],
    },
  ],
})
export class GatewayModule {}
