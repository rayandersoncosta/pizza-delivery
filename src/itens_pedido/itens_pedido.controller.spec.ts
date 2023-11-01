import { Test, TestingModule } from '@nestjs/testing';
import { ItensPedidoController } from './itens_pedido.controller';

describe('ItensPedidoController', () => {
  let controller: ItensPedidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItensPedidoController],
    }).compile();

    controller = module.get<ItensPedidoController>(ItensPedidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
