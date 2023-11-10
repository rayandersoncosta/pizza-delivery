import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateFormasPagamentosDto {
  @IsNotEmpty()
  @Length(0, 100)
  @ApiProperty({ description: 'Escolha a forma de pagamento' })
  nome: string;
}
