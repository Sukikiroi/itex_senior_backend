import { Logger } from '@nestjs/common';
import { join } from 'path';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
export const dbConfig = (): MysqlConnectionOptions => ({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT, 10),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  ssl: process.env.MYSQL_SSL === 'true',
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  // We are using migrations, synchronize should be set to false.
  synchronize: true,
  dropSchema: false,
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,
  logging: false,
  migrations: [join(__dirname, '../migrations/**/*{.ts,.js}')],
});

if (process.env.NODE_ENV === 'development') {
  Logger.debug(dbConfig());
}

export default dbConfig();