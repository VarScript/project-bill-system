import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillEntity } from 'src/typeorm/entities/bill.entity';
import { TpbEntity } from 'src/typeorm/entities/third_party_billed.entity';
import { ThirdPartyBilledModule } from 'src/third-party-billed/third-party-billed.module';

@Module({
  imports: [TypeOrmModule.forFeature([BillEntity]), ThirdPartyBilledModule],
  providers: [BillService],
  controllers: [BillController]
})
export class BillModule {}
