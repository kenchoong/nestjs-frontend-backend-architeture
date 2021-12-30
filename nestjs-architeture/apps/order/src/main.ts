import { NestFactory } from '@nestjs/core';
import {
  Transport,
  MicroserviceOptions,
  TcpOptions,
} from '@nestjs/microservices';
import { OrderModule } from './order.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrderModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0', // just expose it to 0.0.0.0 first, figure out later
        port: 7001, // TODO: should get the port here
      },
    } as TcpOptions,
  );
  await app.listen();
}
bootstrap();
