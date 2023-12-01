import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutosDto } from './dto/create-produtos-dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateProdutosResponseDto } from './dto/create-produtos-response.dto';
import { PaginateQuery } from 'nestjs-paginate/lib/decorator';
import { Paginate } from 'nestjs-paginate';
import { Public } from 'src/auth/decorators/public.decorators';

@ApiTags('Produtos')
@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Produto cadastrado com sucesso',
    type: CreateProdutosResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Produto inválido' })
  create(@Body() newProduto: CreateProdutosDto) {
    return this.produtosService.create(newProduto);
  }

  @Get()
  @Public()
  getPaginated(@Paginate() query: PaginateQuery) {
    return this.produtosService.getPaginated(query);
  }
}
