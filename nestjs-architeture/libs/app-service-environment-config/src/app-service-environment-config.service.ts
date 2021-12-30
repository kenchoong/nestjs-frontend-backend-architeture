import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

import {
  AppServiceEnvConfig,
  ServiceOption,
} from 'libs/domain/app-service-env-config/app-service-env-config.interface';

@Injectable()
export class AppServiceEnvironmentConfigService implements AppServiceEnvConfig {
  constructor(private configService: ConfigService) {}
  getApiPort(): number {
    return this.configService.get('API_PORT');
  }
  getOrderPort(): number {
    return this.configService.get('ORDER_PORT');
  }
  getCartPort(): number {
    return this.configService.get('CART_PORT');
  }
  getStripePort(): number {
    return this.configService.get('STRIPE_PORT');
  }
  getProductPort(): number {
    return this.configService.get('PRODUCT_PORT');
  }

  getOrderServiceOption(): ServiceOption {
    const orderPort = this.configService.get('ORDER_PORT');
    return {
      options: {
        port: orderPort,
        host: orderPort,
      },
      transport: Transport.TCP,
    };
  }
  getProductServiceOption(): ServiceOption {
    const productPort = this.configService.get('PRODUCT_PORT');
    return {
      options: {
        port: productPort,
        host: productPort,
      },
      transport: Transport.TCP,
    };
  }
  getStripeServiceOption(): ServiceOption {
    const stripePort = this.configService.get('STRIPE_PORT');
    return {
      options: {
        port: stripePort,
        host: stripePort,
      },
      transport: Transport.TCP,
    };
  }
  getCartServiceOption(): ServiceOption {
    const cartPort = this.configService.get('CART_PORT');
    return {
      options: {
        port: cartPort,
        host: cartPort,
      },
      transport: Transport.TCP,
    };
  }
}
