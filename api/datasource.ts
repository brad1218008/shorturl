import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

// load development env
if (process.env.NODE_ENV?.trim() === 'dev') {
  dotenv.config({ path: '.env.local' });
} else {
  dotenv.config();
}

export const Data = new DataSource({
  // @ts-ignore
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  entities: ['src/models/*{.ts,.js}'],
  migrationsRun: true,
  logging: true,
  synchronize: true,
})