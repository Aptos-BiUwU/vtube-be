import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@nestjs-modules/ioredis';

import { env } from 'src/config';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';
import dataSource from 'src/libs/typeORM.config';
import { FileUploadModule } from './file-upload/file-upload.module';
import { StreamersModule } from './streamers/streamers.module';
import { StreamRecordsModule } from './stream-records/stream-records.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot(dataSource.options),
    RedisModule.forRoot({
      type: 'single',
      options: {
        host: env.redis.host,
        password: env.redis.password,
        port: env.redis.port,
        db: env.redis.db,
      },
    }),
    CommentsModule,
    UsersModule,
    FileUploadModule,
    StreamersModule,
    StreamRecordsModule,
  ],
})
export class AppModule {}
