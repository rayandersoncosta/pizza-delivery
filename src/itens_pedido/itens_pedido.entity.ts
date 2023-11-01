import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'itens pedidos' })
export class ItensPedido {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 100 })
  OBS: string;

  @Column()
  pedidos_id: number;

  @Column()
  produtos_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
