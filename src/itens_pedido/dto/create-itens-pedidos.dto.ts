import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateItensPedidosDto {
  @IsOptional()
  @Length(0, 225)
  @ApiProperty({ description: 'Observacao do seu pedido' })
  obs: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'ID do pedido' })
  pedidos_id: number;

  @IsNotEmpty()
  @ApiProperty({ description: 'ID do produto' })
  produtos_id: number;
}
