import { Injectable } from '@nestjs/common';
import { ItensPedido } from './itens_pedido.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItensPedidoService {
  constructor(
    @InjectRepository(ItensPedido)
    private itensPedidoRepository: Repository<ItensPedido>,
  ) {}

  async create(newItenPedido): Promise<ItensPedido> {
    const itensPedido = await this.itensPedidoRepository.save(newItenPedido);
    return itensPedido;
  }
}
