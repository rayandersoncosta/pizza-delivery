import { Injectable } from '@nestjs/common';
import { Endereco } from './endereco.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  FilterOperator,
  PaginateQuery,
  Paginated,
  paginate,
} from 'nestjs-paginate';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
  ) {}

  async create(newEndereco): Promise<Endereco> {
    const endereco = await this.enderecoRepository.save(newEndereco);
    return endereco;
  }

  async getPaginated(query: PaginateQuery): Promise<Paginated<Endereco>> {
    return paginate(query, this.enderecoRepository, {
      sortableColumns: ['id', 'rua', 'created_at', 'updated_at'],
      nullSort: 'last',
      defaultSortBy: [['id', 'DESC']],
      searchableColumns: ['id', 'rua'],
      select: [
        'id',
        'rua',
        'bairro',
        'cep',
        'numero',
        'cidade',
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
