import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserSubscriber } from 'src/users/subscribers/user.subcriber';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('databaseHost'),
        port: configService.get<number>('databasePort'),
        username: configService.get<string>('databaseUsername'),
        password: configService.get<string>('databasePassword'),
        database: configService.get<string>('databaseName'),
        entities: [User],
        subscribers: [UserSubscriber],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
