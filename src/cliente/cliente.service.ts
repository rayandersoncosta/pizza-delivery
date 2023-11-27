import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente-dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async create(newCliente: CreateClienteDto): Promise<Cliente> {
    const clienteExistente = await this.findByEmail(newCliente.email);
    if (clienteExistente) {
      throw new BadRequestException();
    }

    newCliente.senha = await bcrypt.hash(newCliente.senha, 10);

    const criarCliente = await this.clienteRepository.save(newCliente);

    delete criarCliente.senha;

    return criarCliente;
  }

  async findByEmail(email: string): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({ where: { email } });

    return cliente;
  }
}
