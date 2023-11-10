import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsStrongPassword, Length } from 'class-validator';

export class CreateClienteDto {
  @IsNotEmpty()
  @Length(0, 100)
  @ApiProperty({ description: 'Nome do cliente' })
  nome: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Telefone do cliente' })
  telefone: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(0, 100)
  @ApiProperty({ description: 'Endereço de email do cliente' })
  email: string;

  @IsNotEmpty()
  @IsStrongPassword({ minLength: 8, minNumbers: 1, minLowercase: 1 })
  @ApiProperty({ description: 'Use a Senha' })
  senha: string;
}
