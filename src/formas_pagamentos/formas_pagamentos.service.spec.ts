import { Test, TestingModule } from '@nestjs/testing';
import { FormasPagamentosService } from './formas_pagamentos.service';

describe('FormasPagamentosService', () => {
  let service: FormasPagamentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormasPagamentosService],
    }).compile();

    service = module.get<FormasPagamentosService>(FormasPagamentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
