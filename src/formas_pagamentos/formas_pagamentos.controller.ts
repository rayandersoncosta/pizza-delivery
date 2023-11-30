import { Body, Controller, Post } from '@nestjs/common';
import { FormasPagamentosService } from './formas_pagamentos.service';
import { CreateFormasPagamentosDto } from './dto/create-formas-pagamentos-dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateFormasPagamentosResponseDto } from './dto/create-formas-pagamentos-response.dto';
import { Public } from 'src/auth/decorators/public.decorators';

@ApiTags('Formas de pagamentos')
@Controller('formas_pagamentos')
export class FormasPagamentosController {
  constructor(private formaPagamentoService: FormasPagamentosService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Forma de pagamento feito com sucesso',
    type: CreateFormasPagamentosResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Forma de pagamento inválida',
  })
  @Public()
  create(@Body() newFormaPagamento: CreateFormasPagamentosDto) {
    return this.formaPagamentoService.create(newFormaPagamento);
  }
}
