import { Injectable, Logger } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { textGenCustom } from 'src/utils/genText/google-ai';
import { CommentResponse } from './dto/response-comment.dto';

@Injectable()
export class CommentsService {
  private readonly logger: Logger = new Logger(CommentsService.name);

  constructor(
    @InjectRepository(Comment)
    private readonly repo: Repository<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const record = await this.repo.save(createCommentDto);
    const response = await textGenCustom.genvTuberResponse(record.content);
    return {
      ...record,
      response: response,
    } as CommentResponse;
  }

  async findByGroup(group: string) {
    return await this.repo.findBy({ group });
  }
}
