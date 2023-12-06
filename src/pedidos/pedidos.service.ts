import { Injectable } from '@nestjs/common';
import { Pedidos } from './pedidos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  FilterOperator,
  PaginateQuery,
  Paginated,
  paginate,
} from 'nestjs-paginate';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedidos)
    private pedidosRepository: Repository<Pedidos>,
  ) {}

  async create(newPedido): Promise<Pedidos> {
    const pedidos = await this.pedidosRepository.save(newPedido);
    return pedidos;
  }

  async getPaginated(query: PaginateQuery): Promise<Paginated<Pedidos>> {
    return paginate(query, this.pedidosRepository, {
      sortableColumns: ['id', 'tipo_entrega', 'created_at', 'updated_at'],
      nullSort: 'last',
      defaultSortBy: [['id', 'DESC']],
      searchableColumns: ['id', 'tipo_entrega'],
      select: ['id', 'tipo_entrega', 'created_at', 'updated_at'],
      filterableColumns: {
        id: [FilterOperator.EQ],
        name: [FilterOperator.EQ, FilterOperator.ILIKE],
      },
    });
  }
}
