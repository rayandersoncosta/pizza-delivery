import { Module } from '@nestjs/common';
import { FormasPagamentosService } from './formas_pagamentos.service';
import { FormasPagamentosController } from './formas_pagamentos.controller';

@Module({
  providers: [FormasPagamentosService],
  controllers: [FormasPagamentosController]
})
export class FormasPagamentosModule {}
