import { Test, TestingModule } from '@nestjs/testing';
import { EndereçoService } from './endereço.service';

describe('EndereçoService', () => {
  let service: EndereçoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EndereçoService],
    }).compile();

    service = module.get<EndereçoService>(EndereçoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
