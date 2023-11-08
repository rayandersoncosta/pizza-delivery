import { IsNotEmpty } from 'class-validator';

export class CreatePedidosDto {
  @IsNotEmpty()
  cliente_id: string;

  @IsNotEmpty()
  tipo_entrega: string;

  @IsNotEmpty()
  endereco_id: number;

  @IsNotEmpty()
  formas_pagamento_id: number;
}
