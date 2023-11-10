import { ApiProperty } from '@nestjs/swagger';

export class CreatePedidosResponseDto {
  @ApiProperty({ description: 'ID do pedido' })
  id: number;

  @ApiProperty({ description: 'Delivery ou retirada no local' })
  tipo_entrega: string;

  @ApiProperty({ description: 'ID do endereco' })
  endereco_id: number;

  @ApiProperty({ description: 'ID da forma de pagamento' })
  formas_pagamento_id: number;

  @ApiProperty({ description: 'Pedido create date.' })
  created_at: Date;

  @ApiProperty({ description: 'Pedido update date.' })
  updated_at: Date;
}
