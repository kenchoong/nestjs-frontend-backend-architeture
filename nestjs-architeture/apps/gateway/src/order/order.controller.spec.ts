import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';

const mockClientProxy = () => ({
  send: jest.fn(),
  connect: jest.fn(),
  close: jest.fn(),
  routingMap: jest.fn(),
});

describe('OrderController', () => {
  let controller: OrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [
        {
          provide: 'ORDER_SERVICE',
          useFactory: mockClientProxy,
        },
      ],
    }).compile();

    controller = module.get<OrderController>(OrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
