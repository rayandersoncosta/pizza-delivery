import { Controller, Post, Body } from '@nestjs/common';
import { ItensPedidoService } from './itens_pedido.service';

@Controller('itens-pedido')
export class ItensPedidoController {
  constructor(private itensPedidoService: ItensPedidoService) {}

  @Post()
  create(@Body() newItenPedido) {
    return this.itensPedidoService.create(newItenPedido);
  }
}
