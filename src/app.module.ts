import { Module } from '@nestjs/common';
import { ThirdPartyBilledModule } from './third-party-billed/third-party-billed.module';
import { BillModule } from './bill/bill.module';
import { ConceptModule } from './concept/concept.module';
import { BillDetailModule } from './bill-detail/bill-detail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillEntity } from './typeorm/entities/bill.entity';
import { ConceptEntity } from './typeorm/entities/concept.entity';
import { BillDetailEntity } from './typeorm/entities/bill-detail.entity';
import { TpbEntity } from './typeorm/entities/third_party_billed.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '#Pass_I3',
      database: 'bill_system_db',
      entities: [
        TpbEntity,
        BillEntity,
        ConceptEntity,
        BillDetailEntity,
      ],
      synchronize: true,
    }),
    ThirdPartyBilledModule,
    BillModule,
    ConceptModule,
    BillDetailModule,
  ],
})
export class AppModule {}
