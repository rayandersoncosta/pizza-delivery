import { Module } from '@nestjs/common';
import { FormasPagamentosService } from './formas_pagamentos.service';
import { FormasPagamentosController } from './formas_pagamentos.controller';
import { FormasPagamentos } from './formas_pagamentos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FormasPagamentos])],
  providers: [FormasPagamentosService],
  controllers: [FormasPagamentosController],
})
export class FormasPagamentosModule {}
