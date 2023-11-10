import { ApiProperty } from '@nestjs/swagger';

export class CreateEnderecoResponseDto {
  @ApiProperty({ description: 'ID do endereço' })
  id: number;

  @ApiProperty({ description: 'Rua do endereço' })
  rua: string;

  @ApiProperty({ description: 'Numero do endereço' })
  numero: string;

  @ApiProperty({ description: 'Bairro do endereço' })
  bairro: string;

  @ApiProperty({ description: 'Cep do endereço' })
  cep: string;

  @ApiProperty({ description: 'Cidade do endereço' })
  cidade: string;

  @ApiProperty({ description: 'ID do Cliente' })
  cliente_id: number;

  @ApiProperty({ description: 'User create date.' })
  created_at: Date;

  @ApiProperty({ description: 'User update date.' })
  updated_at: Date;
}
