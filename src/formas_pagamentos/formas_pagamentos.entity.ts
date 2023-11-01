import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'formas pagamentos' })
export class FormaPagamento {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 100 })
  nome: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
