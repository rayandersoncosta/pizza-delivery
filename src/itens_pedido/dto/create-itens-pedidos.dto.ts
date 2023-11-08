import { IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateItensPedidosDto {
  @IsOptional()
  @Length(0, 225)
  obs: string;

  @IsNotEmpty()
  pedidos_id: number;

  @IsNotEmpty()
  produtos_id: number;
}
