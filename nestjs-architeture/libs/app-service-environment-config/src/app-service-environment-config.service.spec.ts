import { Test, TestingModule } from '@nestjs/testing';
import { AppServiceEnvironmentConfigService } from './app-service-environment-config.service';

describe('AppServiceEnvironmentConfigService', () => {
  let service: AppServiceEnvironmentConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppServiceEnvironmentConfigService],
    }).compile();

    service = module.get<AppServiceEnvironmentConfigService>(
      AppServiceEnvironmentConfigService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
