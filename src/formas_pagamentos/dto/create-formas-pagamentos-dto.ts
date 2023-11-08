import { IsNotEmpty } from 'class-validator';

export class CreateFormasPagamentosDto {
  @IsNotEmpty()
  nome: string;
}
