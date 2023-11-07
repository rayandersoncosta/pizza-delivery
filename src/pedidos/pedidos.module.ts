import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';
import { Pedidos } from './pedidos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pedidos])],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}
