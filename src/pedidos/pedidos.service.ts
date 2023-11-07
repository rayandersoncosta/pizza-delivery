import { Injectable } from '@nestjs/common';
import { Pedidos } from './pedidos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
}
