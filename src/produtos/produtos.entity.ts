import { ItensPedido } from 'src/itens_pedido/itens_pedido.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'produtos' })
export class Produtos {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 150 })
  nome: string;

  @Column({ length: 100 })
  tamanho: string;

  @Column({ length: 100 })
  preco: string;

  @Column()
  quantidade: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => ItensPedido, (itensPedido) => itensPedido.produtos)
  itensPedido: ItensPedido[];
}
