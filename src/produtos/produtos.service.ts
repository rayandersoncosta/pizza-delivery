import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produtos } from './produtos.entity';
import { Repository } from 'typeorm';
import {
  FilterOperator,
  PaginateQuery,
  Paginated,
  paginate,
} from 'nestjs-paginate';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produtos)
    private produtosRepository: Repository<Produtos>,
  ) {}

  async create(newProduto): Promise<Produtos> {
    const produtos = await this.produtosRepository.save(newProduto);
    return produtos;
  }

  async getPaginated(query: PaginateQuery): Promise<Paginated<Produtos>> {
    return paginate(query, this.produtosRepository, {
      sortableColumns: ['id', 'nome', 'created_at', 'updated_at'],
      nullSort: 'last',
      defaultSortBy: [['id', 'DESC']],
      searchableColumns: ['id', 'nome'],
      select: [
        'id',
        'nome',
        'preco',
        'quantidade',
        'tamanho',
        'created_at',
        'updated_at',
      ],
      filterableColumns: {
        id: [FilterOperator.EQ],
        name: [FilterOperator.EQ, FilterOperator.ILIKE],
      },
    });
  }
}
