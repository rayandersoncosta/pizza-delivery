import { ApiProperty } from '@nestjs/swagger';

export class CreateProdutosResponseDto {
  @ApiProperty({ description: 'ID do produto' })
  id: number;

  @ApiProperty({ description: 'Nome do produto cadastrado' })
  nome: string;

  @ApiProperty({ description: 'Tamanho do produto cadastrado' })
  tamanho: string;

  @ApiProperty({ description: 'Preço do produto' })
  preço: string;

  @ApiProperty({ description: 'Quantidade do produto' })
  quantidade: number;

  @ApiProperty({ description: 'Pedido create date.' })
  created_at: Date;

  @ApiProperty({ description: 'Pedido update date.' })
  updated_at: Date;
}
