import { Injectable, Logger } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommentsService {
  private readonly logger: Logger = new Logger(CommentsService.name);

  constructor(
    @InjectRepository(Comment)
    private readonly repo: Repository<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    return await this.repo.save(createCommentDto);
  }

  async findByPumpFunHash(pumpFunHash: string) {
    return await this.repo.findBy({ pumpFunHash });
  }
}
