import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentResponse } from './dto/response-comment.dto';

@Controller('comments')
@ApiTags('Comment')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ApiResponse({
    status: 200,
    type: CommentResponse,
    description: 'Create Comment',
  })
  async create(@Body() createCommentDto: CreateCommentDto) {
    return await this.commentsService.create(createCommentDto);
  }

  @Get(':hash')
  @ApiResponse({
    status: 200,
    type: [CommentResponse],
    description: 'Get All Comment Of PumFun',
  })
  async findOne(@Param('hash') hash: string) {
    return await this.commentsService.findByPumpFunHash(hash);
  }
}
