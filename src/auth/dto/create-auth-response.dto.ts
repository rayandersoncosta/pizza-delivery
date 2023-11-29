import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthResponseDto {
  @ApiProperty({ description: 'Email sucesso ' })
  email: string;

  @ApiProperty({ description: 'Senha sucesso' })
  senha: string;
}
