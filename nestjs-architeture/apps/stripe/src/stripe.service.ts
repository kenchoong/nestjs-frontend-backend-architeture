import { Injectable } from '@nestjs/common';

@Injectable()
export class StripeService {
  getHello(): string {
    return 'Hello World!';
  }
}
