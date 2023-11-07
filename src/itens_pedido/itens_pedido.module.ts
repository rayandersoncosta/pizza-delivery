import { Module } from '@nestjs/common';
import { ItensPedidoService } from './itens_pedido.service';
import { ItensPedidoController } from './itens_pedido.controller';
import { ItensPedido } from './itens_pedido.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ItensPedido])],
  providers: [ItensPedidoService],
  controllers: [ItensPedidoController],
})
export class ItensPedidoModule {}
