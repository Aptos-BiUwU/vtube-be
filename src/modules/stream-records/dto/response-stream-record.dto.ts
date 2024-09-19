import { ApiResponseProperty } from '@nestjs/swagger';
import { RecordStatus } from '../entities/stream-record.entity';

export class StreamerRecordResponseDto {
  @ApiResponseProperty({ type: Number })
  id: number;

  @ApiResponseProperty({ type: Date })
  created_at: Date;

  @ApiResponseProperty({ type: Date })
  updated_at: Date;

  @ApiResponseProperty({ type: String })
  status: RecordStatus;

  @ApiResponseProperty({ type: Number })
  streamerId: number;

  @ApiResponseProperty({ type: Number })
  timeEnd: number;

  @ApiResponseProperty({ type: Number })
  totalView: number;

  @ApiResponseProperty({ type: String })
  image?: string;

  @ApiResponseProperty({ type: String })
  background?: string;

  @ApiResponseProperty({ type: String })
  tittle: string;

  @ApiResponseProperty({ type: String })
  description?: string;
}
