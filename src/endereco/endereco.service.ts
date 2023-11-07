import { Injectable } from '@nestjs/common';
import { Endereco } from './endereco.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
}
