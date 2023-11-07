import { Controller, Post, Body } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutosDto } from './dto/create-produtos-dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Post()
  create(@Body() newProduto: CreateProdutosDto) {
    return this.produtosService.create(newProduto);
  }
}
