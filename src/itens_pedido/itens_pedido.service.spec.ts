import { Test, TestingModule } from '@nestjs/testing';
import { ItensPedidoService } from './itens_pedido.service';

describe('ItensPedidoService', () => {
  let service: ItensPedidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItensPedidoService],
    }).compile();

    service = module.get<ItensPedidoService>(ItensPedidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
