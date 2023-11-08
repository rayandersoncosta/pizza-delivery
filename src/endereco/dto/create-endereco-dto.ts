import { IsNotEmpty } from 'class-validator';

export class CreateEnderecoDto {
  @IsNotEmpty()
  rua: string;

  @IsNotEmpty()
  numero: string;

  @IsNotEmpty()
  bairro: string;

  @IsNotEmpty()
  cep: string;

  @IsNotEmpty()
  cidade: string;

  @IsNotEmpty()
  cliente_id: number;
}
