import { Module } from '@nestjs/common';
import { BillDetailController } from './bill-detail.controller';
import { BillDetailService } from './bill-detail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillDetailEntity } from 'src/typeorm/entities/bill-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BillDetailEntity])],
  controllers: [BillDetailController],
  providers: [BillDetailService]
})
export class BillDetailModule {}
