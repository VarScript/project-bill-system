import {
  Column,
  Decimal128,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BillDetailEntity } from './bill-detail.entity';
import { v4 as uuidv4 } from 'uuid';


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

  @OneToMany(
    () => BillDetailEntity,
    (billDetail) => billDetail.bill,
  )
  billDetails: BillDetailEntity[];
}
