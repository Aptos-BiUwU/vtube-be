import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AiGensService } from './ai-gens.service';
import { CreateAiGenDto } from './dto/create-ai-gen.dto';
import { UpdateAiGenDto } from './dto/update-ai-gen.dto';

@Controller('ai-gens')
export class AiGensController {
  constructor(private readonly aiGensService: AiGensService) {}

  @Post()
  create(@Body() createAiGenDto: CreateAiGenDto) {
    return this.aiGensService.create(createAiGenDto);
  }

  @Get()
  findAll() {
    return this.aiGensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aiGensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAiGenDto: UpdateAiGenDto) {
    return this.aiGensService.update(+id, updateAiGenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aiGensService.remove(+id);
  }
}
