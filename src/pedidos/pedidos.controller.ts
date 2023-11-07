import { Controller, Post, Body } from '@nestjs/common';
import { PedidosService } from './pedidos.service';

@Controller('pedidos')
export class PedidosController {
  constructor(private pedidosService: PedidosService) {}

  @Post()
  create(@Body() newPedido) {
    return this.pedidosService.create(newPedido);
  }
}
