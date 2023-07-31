import { Logger } from '@nestjs/common';
import { join } from 'path';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
export const dbConfig = (): MysqlConnectionOptions => ({
  type: 'mysql',
  host: process.env.MYSQL_PORT||"host.docker.internal",
  port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
  username: process.env.MYSQL_PORT||"root",
  password: process.env.MYSQL_PORT||"aziz",
  database: process.env.MYSQL_PORT||"itex_db",
  ssl: process.env.MYSQL_PORT_SSL === 'true',
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