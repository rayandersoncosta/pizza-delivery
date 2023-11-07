import { Injectable } from '@nestjs/common';
import { FormasPagamentos } from './formas_pagamentos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FormasPagamentosService {
  constructor(
    @InjectRepository(FormasPagamentos)
    private formaPagamentoRepository: Repository<FormasPagamentos>,
  ) {}

  async create(newFormaPagamento): Promise<FormasPagamentos> {
    const formaPagamento =
      await this.formaPagamentoRepository.save(newFormaPagamento);
    return formaPagamento;
  }
}
