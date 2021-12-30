import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';

const mockClientProxy = () => ({
  send: jest.fn(),
  connect: jest.fn(),
  close: jest.fn(),
  routingMap: jest.fn(),
});

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: 'PRODUCT_SERVICE',
          useFactory: mockClientProxy,
        },
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
