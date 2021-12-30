import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'libs/domain/database-config/database.interface';

/**
 *@description: Config service to get environment variable
 *@refer : https://docs.nestjs.com/techniques/configuration#configuration
 *@example: this usage: https://github.com/kenchoong/setel2/blob/HEAD/order/src/services/config/ConfigService.ts
 */
@Injectable()
export class EnvironmentConfigService implements DatabaseConfig {
  constructor(private configService: ConfigService) {}

  getDatabaseHost(): string {
    return this.configService.get<string>('DB_HOST');
  }
  getDatabasePort(): number {
    return this.configService.get<number>('DB_PORT');
  }
  getDatabaseUser(): string {
    return this.configService.get<string>('DB_USER');
  }
  getDatabasePassword(): string {
    return this.configService.get<string>('DB_PASSWORD');
  }
  getDatabaseName(): string {
    return this.configService.get<string>('DB_NAME');
  }
}
