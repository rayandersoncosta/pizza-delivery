import { ApiProperty } from '@nestjs/swagger';

export class CreateFormasPagamentosResponseDto {
  @ApiProperty({ description: 'ID da forma de pagamento' })
  id: number;

  @ApiProperty({ description: 'Escolha a forma de pagamento' })
  nome: string;

  @ApiProperty({ description: 'Formas de pagamentos create date.' })
  created_at: Date;

  @ApiProperty({ description: 'Formas de pagamentos update date.' })
  updated_at: Date;
}
