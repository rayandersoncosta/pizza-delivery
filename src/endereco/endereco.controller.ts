import { Controller, Body, Post } from '@nestjs/common';
import { EnderecoService } from './endereco.service';

@Controller('endereco')
export class EnderecoController {
  constructor(private enderecoService: EnderecoService) {}

  @Post()
  create(@Body() newEndereco) {
    return this.enderecoService.create(newEndereco);
  }
}
