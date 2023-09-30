import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BillDetailEntity } from './bill-detail.entity';

@Entity({ name: 'concept' })
export class ConceptEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({
    type: 'decimal',
    precision: 20,
    scale: 8,
  })
  unit_price: number;

  @Column()
  quantity: number;

  @OneToMany(
    () => BillDetailEntity,
    (billDetail) => billDetail.concept,
  )
  billDetails: BillDetailEntity[];
}
