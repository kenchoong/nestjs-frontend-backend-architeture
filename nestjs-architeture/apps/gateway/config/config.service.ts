import { Transport } from '@nestjs/microservices';

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {};
    this.envConfig.port = process.env.API_PORT;
    this.envConfig.productService = {
      options: {
        port: process.env.PRODUCT_SERVICE_PORT,
        host: process.env.PRODUCT_SERVICE_HOST,
      },
      transport: Transport.TCP,
    };
    this.envConfig.stripeService = {
      options: {
        port: process.env.STRIPE_SERVICE_PORT,
        host: process.env.STRIPE_SERVICE_HOST,
      },
      transport: Transport.TCP,
    };
    this.envConfig.cartService = {
      options: {
        port: process.env.CART_SERVICE_PORT,
        host: process.env.CART_SERVICE_HOST,
      },
      transport: Transport.TCP,
    };
    this.envConfig.orderService = {
      options: {
        port: process.env.ORDER_SERVICE_PORT,
        host: process.env.ORDER_SERVICE_HOST,
      },
      transport: Transport.TCP,
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
