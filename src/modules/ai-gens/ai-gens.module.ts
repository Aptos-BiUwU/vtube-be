import { Module } from '@nestjs/common';
import { AiGensService } from './ai-gens.service';
import { AiGensController } from './ai-gens.controller';

@Module({
  controllers: [AiGensController],
  providers: [AiGensService],
})
export class AiGensModule {}
