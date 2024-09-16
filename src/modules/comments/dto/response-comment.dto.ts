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

  @ApiResponseProperty({ type: Number })
  mention: number;

  @ApiResponseProperty({ type: String })
  content: string;

  @ApiResponseProperty({ type: String })
  pumpFunHash: string;
}
