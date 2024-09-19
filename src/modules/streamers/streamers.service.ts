import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Streamer } from './entities/streamer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StreamersService extends TypeOrmCrudService<Streamer> {
  constructor(
    @InjectRepository(Streamer)
    public repository: Repository<Streamer>,
  ) {
    super(repository);
  }
}
