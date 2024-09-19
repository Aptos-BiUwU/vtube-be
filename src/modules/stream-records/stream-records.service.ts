import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { StreamRecord } from './entities/stream-record.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StreamRecordsService extends TypeOrmCrudService<StreamRecord> {
  constructor(
    @InjectRepository(StreamRecord)
    public repository: Repository<StreamRecord>,
  ) {
    super(repository);
  }
}
