import { Controller, Body, Post, Get } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco-dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateEnderecoResponseDto } from './dto/create-endereco-response.dto';
import { Public } from 'src/auth/decorators/public.decorators';
import { Paginate, PaginateQuery } from 'nestjs-paginate';

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

  @Get()
  @Public()
  getPaginated(@Paginate() query: PaginateQuery) {
    return this.enderecoService.getPaginated(query);
  }
}
