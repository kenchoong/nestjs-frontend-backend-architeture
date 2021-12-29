import { NestFactory } from '@nestjs/core';
import { StripeModule } from './stripe.module';

async function bootstrap() {
  const app = await NestFactory.create(StripeModule);
  await app.listen(3000);
}
bootstrap();
