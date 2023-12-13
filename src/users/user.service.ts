import { LoggerService } from './../logger/custom.logger';
import { BaseService } from './../base.service';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User) repository: Repository<User>,
    logger: LoggerService,
  ) {
    super(repository, logger);
  }

  findByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email: email });
  }
}
