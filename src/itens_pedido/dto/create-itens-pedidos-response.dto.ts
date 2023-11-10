import { ApiProperty } from '@nestjs/swagger';

export class CreateItensPedidosResponseDto {
  @ApiProperty({ description: 'ID dos itens pedidos' })
  id: number;

  @ApiProperty({ description: 'Observação do iten pedido' })
  obs: string;

  @ApiProperty({ description: 'ID do pedido' })
  pedidos_id: number;

  @ApiProperty({ description: 'ID do produto' })
  produto_id: number;

  @ApiProperty({ description: 'Itens pedidos create date.' })
  created_at: Date;

  @ApiProperty({ description: 'Itens pedidos update date.' })
  updated_at: Date;
}
