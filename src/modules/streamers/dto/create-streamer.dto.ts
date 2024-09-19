import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { StreamerStatus } from '../entities/streamer.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStreamerDto {
  @IsEnum(StreamerStatus)
  @IsOptional()
  @ApiProperty({ type: String })
  status: StreamerStatus;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Number })
  level: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  avt?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  background?: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  totalFollower: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  description?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  youtube?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  twitter?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  telegram?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  discord?: string;
}
