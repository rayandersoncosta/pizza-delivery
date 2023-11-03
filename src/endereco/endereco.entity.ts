import { Cliente } from 'src/cliente/cliente.entity';
import { Pedidos } from 'src/pedidos/pedidos.entity';
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

@Entity({ name: 'endereço' })
export class Endereco {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 100 })
  rua: string;

  @Column({ length: 100 })
  numero: string;

  @Column({ length: 100 })
  bairro: string;

  @Column({ length: 100 })
  cep: string;

  @Column({ length: 100 })
  cidade: string;

  @Column()
  cliente_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.enderecos)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;

  @OneToMany(() => Pedidos, (pedidos) => pedidos.endereco)
  pedidos: Pedidos[];
}
