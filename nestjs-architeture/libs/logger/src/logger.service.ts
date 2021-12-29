import { Injectable, Logger } from '@nestjs/common';
import { ILogger } from 'libs/domain/logger/logger.interface';

/**
 *@description: Logger service that extends nestjs logger class
 *@refer : https://docs.nestjs.com/techniques/logger#custom-implementation
 */
@Injectable()
export class LoggerService extends Logger implements ILogger {
  debug(context: string, message: string): void {
    if (process.env.NODE_ENV !== 'production') {
      super.debug(`[DEBUG] ${message}`, context);
    }
  }
  log(context: string, message: string): void {
    super.log(`[CONSOLE INFO] ${message}`, context);
  }
  error(context: string, message: string, trace?: string): void {
    super.error(`[ERROR] ${message}`, trace, context);
  }
}
