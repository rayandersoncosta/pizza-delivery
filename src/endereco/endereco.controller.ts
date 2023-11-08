import { Controller, Body, Post } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco-dto';

@Controller('endereco')
export class EnderecoController {
  constructor(private enderecoService: EnderecoService) {}

  @Post()
  create(@Body() newEndereco: CreateEnderecoDto) {
    return this.enderecoService.create(newEndereco);
  }
}
