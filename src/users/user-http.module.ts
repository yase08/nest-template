import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from '../logger/custom.logger';

@Module({
  imports: [UserModule],
  providers: [UserService, ConfigService, LoggerService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserHttpModule {}
