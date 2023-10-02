import { Module } from '@nestjs/common';
import { ThirdPartyBilledController } from './third-party-billed.controller';
import { ThirdPartyBilledService } from './third-party-billed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TpbEntity } from 'src/typeorm/entities/third_party_billed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TpbEntity])],
  controllers: [ThirdPartyBilledController],
  providers: [ThirdPartyBilledService],
})
export class ThirdPartyBilledModule {}
