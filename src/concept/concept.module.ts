import { Module } from '@nestjs/common';
import { ConceptService } from './concept.service';
import { ConceptController } from './concept.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConceptEntity } from 'src/typeorm/entities/concept.entity';
import { BillModule } from 'src/bill/bill.module';

@Module({
  imports: [TypeOrmModule.forFeature([ConceptEntity]), BillModule],
  providers: [ConceptService],
  controllers: [ConceptController]
})
export class ConceptModule {}
