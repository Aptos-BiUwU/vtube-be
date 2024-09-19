import { Module } from '@nestjs/common';
import { StreamRecordsService } from './stream-records.service';
import { StreamRecordsController } from './stream-records.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreamRecord } from './entities/stream-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StreamRecord])],
  controllers: [StreamRecordsController],
  providers: [StreamRecordsService],
  exports: [StreamRecordsService],
})
export class StreamRecordsModule {}
