import {
  Column,
  Decimal128,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BillDetailEntity } from './bill-detail.entity';
import { v4 as uuidv4 } from 'uuid';
import { TpbEntity } from './third_party_billed.entity';
import { ConceptEntity } from './concept.entity';

@Entity({ name: 'bill' })
export class BillEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string = uuidv4();

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  issue_date: Date;

  @Column({
    type: 'decimal',
    precision: 20,
    scale: 8,
  })
  total: number;

  @Column()
  tpbId: number;

  @ManyToOne(
    () => TpbEntity,
    (tpbEntity) => tpbEntity.bill,
  )
  tpb: TpbEntity;

  @OneToMany(
    () => ConceptEntity,
    (conceptEntity) => conceptEntity.bill,
  )
  concepts: ConceptEntity[]

  @OneToMany(
    () => BillDetailEntity,
    (billDetail) => billDetail.bill,
  )
  billDetails: BillDetailEntity[];
}
