import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppServiceEnvironmentConfigService } from './app-service-environment-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      //envFilePath: './env/local.env',
    }),
  ],
  providers: [AppServiceEnvironmentConfigService],
  exports: [AppServiceEnvironmentConfigService],
})
export class AppServiceEnvironmentConfigModule {}
