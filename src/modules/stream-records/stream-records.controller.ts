import { Controller } from '@nestjs/common';
import { StreamRecordsService } from './stream-records.service';
import { CreateStreamRecordDto } from './dto/create-stream-record.dto';
import { UpdateStreamRecordDto } from './dto/update-stream-record.dto';
import { Crud, CrudController } from '@dataui/crud';
import { StreamRecord } from './entities/stream-record.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { StreamerRecordResponseDto } from './dto/response-stream-record.dto';

@Controller('stream-records')
@ApiTags('Stream Record')
@Crud({
  model: { type: StreamRecord },
  dto: {
    create: CreateStreamRecordDto,
    update: UpdateStreamRecordDto,
  },
  query: {
    limit: 50,
    cache: 200,
  },
  routes: {
    only: [
      'getManyBase',
      'getOneBase',
      'deleteOneBase',
      'updateOneBase',
      'createOneBase',
    ],
    getOneBase: {
      decorators: [
        ApiResponse({
          status: 201,
          type: StreamerRecordResponseDto,
          description: 'Streamer Record Info',
        }),
      ],
    },
    getManyBase: {},
    deleteOneBase: {
      decorators: [
        ApiResponse({
          status: 201,
          type: StreamerRecordResponseDto,
          description: 'Streamer Info',
        }),
      ],
    },
    updateOneBase: {
      decorators: [
        ApiResponse({
          status: 201,
          type: StreamerRecordResponseDto,
          description: 'Streamer Info',
        }),
      ],
    },
    createOneBase: {
      decorators: [
        ApiResponse({
          status: 201,
          type: StreamerRecordResponseDto,
          description: 'Streamer Info',
        }),
      ],
    },
  },
  params: {
    id: {
      type: 'number',
      primary: true,
      field: 'id',
    },
  },
})
export class StreamRecordsController implements CrudController<StreamRecord> {
  constructor(public service: StreamRecordsService) {}
}
