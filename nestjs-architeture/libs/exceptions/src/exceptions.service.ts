import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  IException,
  IFormatExceptionMessage,
} from 'libs/domain/exceptions/exceptions.interface';

/**
 *@description: Make it a class for built in Nestjs http exception, so can use it everywhere
 *@refer : https://docs.nestjs.com/exception-filters#built-in-http-exceptions
 */
@Injectable()
export class ExceptionsService implements IException {
  badRequestException(data: IFormatExceptionMessage): void {
    throw new BadRequestException(data);
  }
  internalServerErrorException(data?: IFormatExceptionMessage): void {
    throw new InternalServerErrorException(data);
  }
}
