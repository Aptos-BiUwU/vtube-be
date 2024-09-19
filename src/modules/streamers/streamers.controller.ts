import { Crud, CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';
import { StreamersService } from './streamers.service';
import { CreateStreamerDto } from './dto/create-streamer.dto';
import { UpdateStreamerDto } from './dto/update-streamer.dto';
import { Streamer } from './entities/streamer.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { StreamerResponseDto } from './dto/response-streamer.dto';

@Controller('streamers')
@ApiTags('Streamer')
@Crud({
  model: { type: Streamer },
  dto: {
    create: CreateStreamerDto,
    update: UpdateStreamerDto,
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
          type: StreamerResponseDto,
          description: 'Streamer Info',
        }),
      ],
    },
    getManyBase: {},
    deleteOneBase: {
      decorators: [
        ApiResponse({
          status: 201,
          type: StreamerResponseDto,
          description: 'Streamer Info',
        }),
      ],
    },
    updateOneBase: {
      decorators: [
        ApiResponse({
          status: 201,
          type: StreamerResponseDto,
          description: 'Streamer Info',
        }),
      ],
    },
    createOneBase: {
      decorators: [
        ApiResponse({
          status: 201,
          type: StreamerResponseDto,
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
export class StreamersController implements CrudController<Streamer> {
  constructor(public service: StreamersService) {}
}
