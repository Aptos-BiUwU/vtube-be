import { ApiResponseProperty } from '@nestjs/swagger';
import { StreamerStatus } from '../entities/streamer.entity';

export class StreamerResponseDto {
  @ApiResponseProperty({ type: Number })
  id: number;

  @ApiResponseProperty({ type: Date })
  created_at: Date;

  @ApiResponseProperty({ type: Date })
  updated_at: Date;

  @ApiResponseProperty({ type: String })
  status: StreamerStatus;

  @ApiResponseProperty({ type: String })
  level: string;

  @ApiResponseProperty({ type: String })
  name: string;

  @ApiResponseProperty({ type: String })
  avt?: string;

  @ApiResponseProperty({ type: Number })
  background?: number;

  @ApiResponseProperty({ type: String })
  totalFollower: string;

  @ApiResponseProperty({ type: String })
  description?: string;

  @ApiResponseProperty({ type: String })
  youtube: string;

  @ApiResponseProperty({ type: String })
  twitter?: string;

  @ApiResponseProperty({ type: String })
  telegram?: string;

  @ApiResponseProperty({ type: String })
  discord?: string;
}
