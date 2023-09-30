import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThirdPartyBilledModule } from './third-party-billed/third-party-billed.module';
import { BillModule } from './bill/bill.module';
import { ConceptModule } from './concept/concept.module';
import { BillDetailModule } from './bill-detail/bill-detail.module';

@Module({
  imports: [ThirdPartyBilledModule, BillModule, ConceptModule, BillDetailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
