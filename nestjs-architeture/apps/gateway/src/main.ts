import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import { AppServiceEnvironmentConfigService } from '@common/app-service-environment-config';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  const configService = app.get(AppServiceEnvironmentConfigService);
  const PORT = configService.getApiPort();
  await app.listen(PORT);
}
bootstrap();
