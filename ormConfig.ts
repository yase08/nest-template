import { ConfigService, registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { User } from './src/users/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig();

const configService = new ConfigService();

const config = {
  type: 'postgres',
  host: "127.0.0.1",
  port: 5432,
  username: "postgres",
  password: "Ayasbogor123_",
  database: "nestjs-template",
  entities: [User],
  migrations: ["./src/database/migrations/**"]
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
