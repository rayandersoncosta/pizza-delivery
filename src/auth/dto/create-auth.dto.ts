import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'Cliente login' })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Cliente senha' })
  senha: string;
}
