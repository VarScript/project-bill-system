import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BillEntity } from './bill.entity';

@Entity({ name: 'third_party_billed' })
export class TpbEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @OneToMany(
    () => BillEntity,
    (billEntity) => billEntity.tbp,
  )
  bill: BillEntity[];
}
