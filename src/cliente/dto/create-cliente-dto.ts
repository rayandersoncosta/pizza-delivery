import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateClienteDto {
  @IsNotEmpty()
  @Length(100)
  nome: string;

  @IsNotEmpty()
  telefone: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(100)
  email: string;

  @IsNotEmpty()
  @Length(100)
  senha: string;
}
