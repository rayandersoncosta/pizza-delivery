import { Controller, Post, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente-dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateClienteResponseDto } from './dto/create-cliente-response.dto';
import { Cliente } from './cliente.entity';
import { Public } from 'src/auth/decorators/public.decorators';

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
  @Public()
  create(@Body() newCliente: CreateClienteDto): Promise<Cliente> {
    return this.clienteService.create(newCliente);
  }
}
