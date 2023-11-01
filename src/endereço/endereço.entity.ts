import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'endereço' })
export class Endereço {
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

  @Column({ length: 100 })
  cliente_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
