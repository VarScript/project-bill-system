import {
  Column,
  Decimal128,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BillDetailEntity } from './bill-detail.entity';

@Entity({ name: 'bill' })
export class BillEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

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

  @OneToMany(
    () => BillDetailEntity,
    (billDetail) => billDetail.bill,
  )
  billDetails: BillDetailEntity[];
}
