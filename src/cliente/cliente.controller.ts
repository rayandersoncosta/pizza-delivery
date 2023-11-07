import { Controller, Post, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Post()
  create(@Body() newCliente) {
    return this.clienteService.create(newCliente);
  }
}
