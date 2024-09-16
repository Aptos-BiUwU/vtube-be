import { PartialType } from '@nestjs/mapped-types';
import { CreateAiGenDto } from './create-ai-gen.dto';

export class UpdateAiGenDto extends PartialType(CreateAiGenDto) {}
