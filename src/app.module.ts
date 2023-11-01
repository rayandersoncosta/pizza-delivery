import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { EndereçoModule } from './endereço/endereço.module';
import { FormasPagamentosModule } from './formas_pagamentos/formas_pagamentos.module';
import { ItensPedidoModule } from './itens_pedido/itens_pedido.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [
    ClienteModule,
    EndereçoModule,
    FormasPagamentosModule,
    ItensPedidoModule,
    PedidosModule,
    ProdutosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
