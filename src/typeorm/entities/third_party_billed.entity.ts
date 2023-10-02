import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
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
  }
  