import { Injectable } from '@nestjs/common';
import { CreateAiGenDto } from './dto/create-ai-gen.dto';
import { UpdateAiGenDto } from './dto/update-ai-gen.dto';

@Injectable()
export class AiGensService {
  create(createAiGenDto: CreateAiGenDto) {
    return 'This action adds a new aiGen';
  }

  findAll() {
    return `This action returns all aiGens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aiGen`;
  }

  update(id: number, updateAiGenDto: UpdateAiGenDto) {
    return `This action updates a #${id} aiGen`;
  }

  remove(id: number) {
    return `This action removes a #${id} aiGen`;
  }
}
