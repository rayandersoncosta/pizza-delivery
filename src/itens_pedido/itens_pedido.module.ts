import { Module } from '@nestjs/common';
import { ItensPedidoService } from './itens_pedido.service';
import { ItensPedidoController } from './itens_pedido.controller';

@Module({
  providers: [ItensPedidoService],
  controllers: [ItensPedidoController]
})
export class ItensPedidoModule {}
