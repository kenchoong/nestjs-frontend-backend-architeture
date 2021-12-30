import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './cart.controller';

const mockClientProxy = () => ({
  send: jest.fn(),
  connect: jest.fn(),
  close: jest.fn(),
  routingMap: jest.fn(),
});

describe('CartController', () => {
  let controller: CartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [
        {
          provide: 'CART_SERVICE',
          useFactory: mockClientProxy,
        },
      ],
    }).compile();

    controller = module.get<CartController>(CartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
