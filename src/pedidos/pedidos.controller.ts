import { Controller, Post, Body } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidosDto } from './dto/create-pedidos.dto';

@Controller('pedidos')
export class PedidosController {
  constructor(private pedidosService: PedidosService) {}

  @Post()
  create(@Body() newPedido: CreatePedidosDto) {
    return this.pedidosService.create(newPedido);
  }
}
