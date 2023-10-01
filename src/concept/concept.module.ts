import { Module } from '@nestjs/common';
import { ConceptService } from './concept.service';
import { ConceptController } from './concept.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConceptEntity } from 'src/typeorm/entities/concept.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConceptEntity])],
  providers: [ConceptService],
  controllers: [ConceptController]
})
export class ConceptModule {}
