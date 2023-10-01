import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConceptEntity } from 'src/typeorm/entities/concept.entity';
import { Repository } from 'typeorm';
import {
  CreateConceptDto,
  EditConceptDto,
} from './dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ConceptService {
  constructor(
    @InjectRepository(ConceptEntity)
    private conceptRepository: Repository<ConceptEntity>,
  ) {}

  getConcepts() {
    return this.conceptRepository.find();
  }

  createConcept(concept: CreateConceptDto) {
    try {
      const newConcept =
        this.conceptRepository.create(concept);
      return this.conceptRepository.save(
        newConcept,
      );
    } catch (error) {
      throw new BadRequestException(
        'Los datos proporcionados son inválidos.',
      );
    }
  }

  updateConcept(
    id: number,
    concept: EditConceptDto,
  ) {
    try {
      return this.conceptRepository.update(
        { id },
        concept,
      );
    } catch (error) {
      throw new BadRequestException(
        'Los datos proporcionados son inválidos.',
      );
    }
  }

  deleteConcept(id: number) {
    return this.conceptRepository.delete({ id });
  }
}
