import { Controller, Post, Body } from '@nestjs/common';
import { ItensPedidoService } from './itens_pedido.service';
import { CreateItensPedidosDto } from './dto/create-itens-pedidos.dto';

@Controller('itens_pedido')
export class ItensPedidoController {
  constructor(private itensPedidoService: ItensPedidoService) {}

  @Post()
  create(@Body() newItenPedido: CreateItensPedidosDto) {
    return this.itensPedidoService.create(newItenPedido);
  }
}
