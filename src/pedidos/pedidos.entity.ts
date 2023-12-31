import { Endereco } from 'src/endereco/endereco.entity';
import { FormaPagamento } from 'src/formas_pagamentos/formas_pagamentos.entity';
import { ItensPedido } from 'src/itens_pedido/itens_pedido.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'pedidos' })
export class Pedidos {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  cliente_id: number;

  @Column({ length: 100 })
  tipo_entrega: string;

  @Column({ length: 100 })
  forma_pagamento: string;

  @Column()
  endereco_id: number;

  @Column()
  formas_pagamento_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Endereco, (endereco) => endereco.pedidos)
  @JoinColumn({ name: 'endereco_id' })
  endereco: Endereco;

  @ManyToOne(() => FormaPagamento, (formaPagamento) => formaPagamento.pedidos)
  @JoinColumn({ name: 'forma_pagamento_id' })
  formaPagamento: FormaPagamento;

  @OneToMany(() => ItensPedido, (itensPedido) => itensPedido.pedidos)
  itensPedido: ItensPedido[];
}
