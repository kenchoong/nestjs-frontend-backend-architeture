import { Test, TestingModule } from '@nestjs/testing';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';

describe('StripeController', () => {
  let stripeController: StripeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StripeController],
      providers: [StripeService],
    }).compile();

    stripeController = app.get<StripeController>(StripeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(stripeController.getHello()).toBe('Hello World!');
    });
  });
});
