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

  @Get('/:group')
  @ApiResponse({
    status: 201,
    type: [CommentResponse],
    description: 'Get All Comment Of Group',
  })
  async findAllOfGroup(@Param('group') group: string) {
    return await this.commentsService.findByGroup(group);
  }
}
