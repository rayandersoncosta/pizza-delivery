import { Controller, Post, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente-dto';

@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Post()
  create(@Body() newCliente: CreateClienteDto) {
    return this.clienteService.create(newCliente);
  }
}
