import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePedidosDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'Cliente associado ao pedido ' })
  cliente_id: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Delivery ou retirada no loca' })
  tipo_entrega: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Endereco assiciado ao pedido' })
  endereco_id: number;

  @IsNotEmpty()
  @ApiProperty({ description: 'Forma de pagamento associado ao pedido' })
  formas_pagamento_id: number;
}
