import { Test, TestingModule } from '@nestjs/testing';
import { StripeController } from './stripe.controller';
const mockClientProxy = () => ({
  send: jest.fn(),
  connect: jest.fn(),
  close: jest.fn(),
  routingMap: jest.fn(),
});

describe('StripeController', () => {
  let controller: StripeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StripeController],
      providers: [
        {
          provide: 'STRIPE_SERVICE',
          useFactory: mockClientProxy,
        },
      ],
    }).compile();

    controller = module.get<StripeController>(StripeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
