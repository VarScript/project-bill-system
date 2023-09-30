import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThirdPartyBilledModule } from './third-party-billed/third-party-billed.module';
import { BillModule } from './bill/bill.module';
import { ConceptModule } from './concept/concept.module';
import { BillDetailModule } from './bill-detail/bill-detail.module';
import { TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '#Pass_I3',
      database: 'bill_system_db',
      entities: [],
      synchronize: true,
    }),
    ThirdPartyBilledModule,
    BillModule,
    ConceptModule,
    BillDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
