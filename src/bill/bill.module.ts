import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillEntity } from 'src/typeorm/entities/bill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BillEntity])],
  providers: [BillService],
  controllers: [BillController]
})
export class BillModule {}
