import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@nestjs-modules/ioredis';

import { env } from 'src/config';
import { CommentsModule } from './comments/comments.module';
import { AiGensModule } from './ai-gens/ai-gens.module';
import dataSource from 'src/libs/typeORM.config';

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
    AiGensModule,
  ],
})
export class AppModule {}
