import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateAuthResponseDto } from './dto/create-auth-response.dto';
import { Public } from './decorators/public.decorators';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Quando a autenticação é salva com sucesso',
    type: CreateAuthResponseDto,
  })
  @Public()
  create(@Body() authDto: CreateAuthDto) {
    return this.authService.autenticacao(authDto);
  }
}
