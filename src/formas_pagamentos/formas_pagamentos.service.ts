import { Injectable } from '@nestjs/common';
import { FormasPagamentos } from './formas_pagamentos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  FilterOperator,
  PaginateQuery,
  Paginated,
  paginate,
} from 'nestjs-paginate';

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

  async getPaginated(
    query: PaginateQuery,
  ): Promise<Paginated<FormasPagamentos>> {
    return paginate(query, this.formaPagamentoRepository, {
      sortableColumns: ['id', 'nome', 'created_at', 'updated_at'],
      nullSort: 'last',
      defaultSortBy: [['id', 'DESC']],
      searchableColumns: ['id', 'nome'],
      select: ['id', 'nome', 'created_at', 'updated_at'],
      filterableColumns: {
        id: [FilterOperator.EQ],
        name: [FilterOperator.EQ, FilterOperator.ILIKE],
      },
    });
  }
}
