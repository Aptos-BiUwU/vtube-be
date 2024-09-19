import { PartialType } from '@nestjs/mapped-types';
import { CreateStreamRecordDto } from './create-stream-record.dto';

export class UpdateStreamRecordDto extends PartialType(CreateStreamRecordDto) {}
