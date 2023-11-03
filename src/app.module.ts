import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { EnderecoModule } from './endereco/endereco.module';
import { FormasPagamentosModule } from './formas_pagamentos/formas_pagamentos.module';
import { ItensPedidoModule } from './itens_pedido/itens_pedido.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [
    ClienteModule,
    EnderecoModule,
    FormasPagamentosModule,
    ItensPedidoModule,
    PedidosModule,
    ProdutosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
