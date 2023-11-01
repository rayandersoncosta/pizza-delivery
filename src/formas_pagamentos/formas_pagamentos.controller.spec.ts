import { Test, TestingModule } from '@nestjs/testing';
import { FormasPagamentosController } from './formas_pagamentos.controller';

describe('FormasPagamentosController', () => {
  let controller: FormasPagamentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormasPagamentosController],
    }).compile();

    controller = module.get<FormasPagamentosController>(FormasPagamentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
