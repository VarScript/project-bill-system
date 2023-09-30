import { Module } from '@nestjs/common';
import { BillController } from './bill.controller';

@Module({
  controllers: [BillController]
})
export class BillModule {}
