import { ApiResponseProperty } from '@nestjs/swagger';
import { CommentStatus } from 'src/constants/comment.info';

export class CommentResponse {
  @ApiResponseProperty({ type: Number })
  id: number;

  @ApiResponseProperty({ type: Date })
  created_at: Date;

  @ApiResponseProperty({ type: Date })
  updated_at: Date;

  @ApiResponseProperty({ type: String })
  status: CommentStatus;

  @ApiResponseProperty({ type: String })
  owner: string;

  @ApiResponseProperty({ type: String })
  group: string;

  @ApiResponseProperty({ type: String })
  mention?: string;

  @ApiResponseProperty({ type: Number })
  reply?: number;

  @ApiResponseProperty({ type: String })
  content?: string;

  @ApiResponseProperty({ type: String })
  image?: string;

  @ApiResponseProperty({ type: String })
  response: string;
}
