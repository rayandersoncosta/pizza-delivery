import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProdutosDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'Nome do produto a ser cadastrado ' })
  nome: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Tamanho do produto a ser cadastrado' })
  tamanho: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Preço do produto cadastrado' })
  preco: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Quantidade de produto' })
  quantidade: number;
}
