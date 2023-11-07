import { IsNotEmpty } from 'class-validator';

export class CreateProdutosDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  tamanho: string;

  @IsNotEmpty()
  preco: string;

  @IsNotEmpty()
  quantidade: number;
}
