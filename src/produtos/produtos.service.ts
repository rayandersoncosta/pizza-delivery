import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produtos } from './produtos.entity';
import { Repository } from 'typeorm';

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
}
