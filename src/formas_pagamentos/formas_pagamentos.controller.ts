import { Body, Controller, Post } from '@nestjs/common';
import { FormasPagamentosService } from './formas_pagamentos.service';

@Controller('formas-pagamentos')
export class FormasPagamentosController {
  constructor(private formaPagamentoService: FormasPagamentosService) {}

  @Post()
  create(@Body() newFormaPagamento) {
    return this.formaPagamentoService.create(newFormaPagamento);
  }
}
