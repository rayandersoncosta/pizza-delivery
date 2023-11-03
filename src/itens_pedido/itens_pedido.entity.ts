import { Pedidos } from 'src/pedidos/pedidos.entity';
import { Produto } from 'src/produtos/produtos.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'itens pedidos' })
export class ItensPedido {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 225 })
  OBS: string;

  @Column()
  pedidos_id: number;

  @Column()
  produtos_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Pedidos, (pedidos) => pedidos.itensPedido)
  @JoinColumn({ name: 'pedidos_id' })
  pedidos: Pedidos;

  @ManyToOne(() => Produto, (produtos) => produtos.itensPedido)
  @JoinColumn({ name: 'produtos_id' })
  produtos: Produto;
}
