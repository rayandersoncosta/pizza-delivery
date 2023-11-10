import { Controller, Body, Post } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco-dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateEnderecoResponseDto } from './dto/create-endereco-response.dto';

@ApiTags('Endereco')
@Controller('endereco')
export class EnderecoController {
  constructor(private enderecoService: EnderecoService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Endereço criado com sucesso',
    type: CreateEnderecoResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Endereço inválido',
  })
  create(@Body() newEndereco: CreateEnderecoDto) {
    return this.enderecoService.create(newEndereco);
  }
}
