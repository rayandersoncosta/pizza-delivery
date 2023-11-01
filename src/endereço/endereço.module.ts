import { Module } from '@nestjs/common';
import { EndereçoController } from './endereço.controller';
import { EndereçoService } from './endereço.service';

@Module({
  controllers: [EndereçoController],
  providers: [EndereçoService]
})
export class EndereçoModule {}
