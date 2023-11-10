import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteResponseDto {
  @ApiProperty({ description: 'ID Cliente' })
  id: number;

  @ApiProperty({ description: 'Nome do cliente' })
  nome: string;

  @ApiProperty({ description: 'Telefone do cliente' })
  telefone: string;

  @ApiProperty({ description: 'Email do cliente' })
  email: string;

  @ApiProperty({ description: 'Senha do cliente' })
  senha: string;

  @ApiProperty({ description: 'Cliente create date.' })
  created_at: Date;

  @ApiProperty({ description: 'Cliente update date.' })
  updated_at: Date;
}
