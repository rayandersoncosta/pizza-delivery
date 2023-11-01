import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'pedidos' })
export class Pedido {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  cliente_id: number;

  @Column({ length: 100 })
  tipo_entrega: string;

  @Column({ length: 100 })
  forma_pagamento: string;

  @Column()
  endereço_id: number;

  @Column()
  formas_pagamento_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
