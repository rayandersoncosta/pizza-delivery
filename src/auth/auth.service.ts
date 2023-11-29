import { BadRequestException, Injectable } from '@nestjs/common';
import { ClienteService } from 'src/cliente/cliente.service';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private clienteService: ClienteService,
    private jwtService: JwtService,
  ) {}

  async autenticacao(body: CreateAuthDto) {
    const clienteExistente = await this.clienteService.findByEmail(body.email);

    if (!clienteExistente) {
      throw new BadRequestException();
    }

    const senhaMatch = await bcrypt.compare(body.senha, clienteExistente.senha);

    if (!senhaMatch) {
      throw new BadRequestException();
    }

    const payload = {
      clienteemail: clienteExistente.email,
      sub: clienteExistente.id,
      nome: clienteExistente.nome,
    };

    return {
      acess_token: await this.jwtService.signAsync(payload),
    };
  }
}
