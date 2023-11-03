import { Endereco } from 'src/endereco/endereco.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'cliente' })
export class Cliente {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100 })
  telefone: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  senha: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Endereco, (enderecos) => enderecos.cliente)
  enderecos: Endereco[];
}
