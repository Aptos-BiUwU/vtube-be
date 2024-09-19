import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { RecordStatus } from '../entities/stream-record.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStreamRecordDto {
  @IsEnum(RecordStatus)
  @IsOptional()
  @ApiProperty({ type: String })
  status?: RecordStatus;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  streamerId: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Number })
  timeEnd?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Number })
  totalView?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  image?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  background?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  description?: string;
}
