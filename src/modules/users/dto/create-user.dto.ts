import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  walletAddress: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  avt?: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  background?: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  bio?: string;
}
