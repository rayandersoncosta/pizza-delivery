import { Controller, Post, Body } from '@nestjs/common';
import { ItensPedidoService } from './itens_pedido.service';
import { CreateItensPedidosDto } from './dto/create-itens-pedidos.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateItensPedidosResponseDto } from './dto/create-itens-pedidos-response.dto';

@ApiTags('Itens pedido')
@Controller('itens_pedido')
export class ItensPedidoController {
  constructor(private itensPedidoService: ItensPedidoService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Itens pedido com sucesso ',
    type: CreateItensPedidosResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Itens pedido inválido',
  })
  create(@Body() newItenPedido: CreateItensPedidosDto) {
    return this.itensPedidoService.create(newItenPedido);
  }
}
