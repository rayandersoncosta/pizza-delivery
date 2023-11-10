import { Controller, Post, Body } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidosDto } from './dto/create-pedidos.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreatePedidosResponseDto } from './dto/create-pedidos-response.dto';

@ApiTags('Pedidos')
@Controller('pedidos')
export class PedidosController {
  constructor(private pedidosService: PedidosService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Pedido criado com sucesso',
    type: CreatePedidosResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Pedido inválido',
  })
  create(@Body() newPedido: CreatePedidosDto) {
    return this.pedidosService.create(newPedido);
  }
}
