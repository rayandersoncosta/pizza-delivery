import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateEnderecoDto {
  @IsNotEmpty()
  @Length(0, 100)
  @ApiProperty({ description: 'Rua do endereço' })
  rua: string;

  @IsNotEmpty()
  @Length(0, 100)
  @ApiProperty({ description: 'Numero do endereço' })
  numero: string;

  @IsNotEmpty()
  @Length(0, 100)
  @ApiProperty({ description: 'Bairro do endereço' })
  bairro: string;

  @IsNotEmpty()
  @Length(0, 100)
  @ApiProperty({ description: 'Cep do endereço' })
  cep: string;

  @IsNotEmpty()
  @Length(0, 100)
  @ApiProperty({ description: 'Cidade do endereço' })
  cidade: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Cliente associado ao endereço' })
  cliente_id: number;
}