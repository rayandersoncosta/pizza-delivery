import { Controller, Post, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente-dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateClienteResponseDto } from './dto/create-cliente-response.dto';

@ApiTags('Cliente')
@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Cliente criado com sucesso',
    type: CreateClienteResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Quando da erro de validação dos dados enviados',
  })
  create(@Body() newCliente: CreateClienteDto) {
    return this.clienteService.create(newCliente);
  }
}
