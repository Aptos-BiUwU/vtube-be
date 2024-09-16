import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { textGenCustom } from 'src/utils/genText/google-ai';
import { CommentResponse } from './dto/response-comment.dto';
import { textToSpeech } from 'src/utils/textToSpeech/text-to-speech';
import { User } from '../users/entities/user.entity';

@Injectable()
export class CommentsService {
  private readonly logger: Logger = new Logger(CommentsService.name);

  constructor(
    @InjectRepository(Comment)
    private readonly repo: Repository<Comment>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const record = await this.repo.save(createCommentDto);
    const user = await this.userRepo.findOneBy({
      walletAddress: createCommentDto.owner,
    });
    if (!user)
      throw new NotFoundException(
        `User with wallet address ${createCommentDto.owner} not found`,
      );

    // const hiRespone = this.hiComment(createCommentDto.owner);

    const mainResponse = await textGenCustom.genvTuberResponse(
      createCommentDto.content,
    );

    const urlSpeech = await textToSpeech.genTextToSpeech(mainResponse);
    return {
      ...record,
      urlResponse: urlSpeech,
    } as CommentResponse;
  }

  async findByGroup(group: string) {
    return await this.repo.findBy({ group });
  }

  private hiComment(owner: string) {
    return `Hi ${owner}!`;
  }
}
