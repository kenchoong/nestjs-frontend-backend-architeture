import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigModule } from 'libs/environment-config/src';
import { EnvironmentConfigService } from 'libs/environment-config/src';

/**
 * @description: This is the connection to the Postgres database
 * @param config
 * @returns TypeOrmModuleOptions object to be use in for Root
 * @refer https://docs.nestjs.com/techniques/database#typeorm-integration
 *
 */
export const getTypeOrmModuleOptions = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: config.getDatabaseHost(),
  port: config.getDatabasePort(),
  username: config.getDatabaseUser(),
  password: config.getDatabasePassword(),
  database: config.getDatabaseName(),
});

/**
 *@refer: https://docs.nestjs.com/techniques/database#async-configuration-1
 *@description: need forRootAsync because we need to get the config data from ConfigModule
 */
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
  providers: [],
  exports: [],
})
export class TypeormModule {}
