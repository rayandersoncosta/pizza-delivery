import { Body, Controller, Post } from '@nestjs/common';
import { FormasPagamentosService } from './formas_pagamentos.service';
import { CreateFormasPagamentosDto } from './dto/create-formas-pagamentos-dto';

@Controller('formas_pagamentos')
export class FormasPagamentosController {
  constructor(private formaPagamentoService: FormasPagamentosService) {}

  @Post()
  create(@Body() newFormaPagamento: CreateFormasPagamentosDto) {
    return this.formaPagamentoService.create(newFormaPagamento);
  }
}
