import { ValidationOptions } from 'class-validator';
import { HttpStatus } from '@nestjs/common';

export const ValidationConfig: ValidationOptions | Record<string, any> = {
  whitelist: true,
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  forbidNonWhitelisted: true,
  disableErrorMessages: false,
  skipMissingProperties: false,
};
