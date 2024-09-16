import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  owner: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  group: string;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  mention?: string;

  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsNumber()
  reply?: number;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  content?: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  image?: string;
}
