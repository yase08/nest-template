import { BaseEntity, DeleteResult, Repository } from 'typeorm';
import { EntityId } from 'typeorm/repository/EntityId';
import { IBaseService } from './i.base.service';
import { LoggerService } from './logger/custom.logger';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseService<T extends BaseEntity> implements IBaseService<T> {
  protected readonly logger: LoggerService;
  protected readonly repository: Repository<T>;

  constructor(
    @InjectRepository(BaseEntity)
    repository: Repository<T>,
    logger: LoggerService,
  ) {
    this.logger = logger;
    this.repository = repository;
  }

  index(): Promise<T[]> {
    return this.repository.find();
  }

  findById(id: any): Promise<T> {
    return this.repository.findOne(id);
  }

  store(data: any): Promise<T> {
    return this.repository.save(data);
  }

  async update(id: EntityId, data: any): Promise<T> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  delete(id: EntityId): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
