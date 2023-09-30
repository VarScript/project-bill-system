import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BillEntity } from './bill.entity';
import {
  ConceptEntity,
} from './concept.entity';

@Entity({ name: 'bill_detail' })
export class BillDetailEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => BillEntity,
    (bill) => bill.billDetails,
  )
  @JoinColumn({ name: 'bill_id' })
  bill: BillEntity;

  @ManyToOne(
    () => ConceptEntity,
    (concept) => concept.billDetails,
  )
  @JoinColumn({ name: 'concept_id' })
  concept: ConceptEntity;

  @Column()
  quantity: number;
}
