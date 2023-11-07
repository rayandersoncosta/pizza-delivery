import { Pedidos } from 'src/pedidos/pedidos.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'formas_pagamentos' })
export class FormasPagamentos {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 100 })
  nome: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Pedidos, (pedidos) => pedidos.formaPagamento)
  pedidos: Pedidos[];
}
