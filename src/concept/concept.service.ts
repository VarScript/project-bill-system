import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConceptEntity } from 'src/typeorm/entities/concept.entity';
import { Repository } from 'typeorm';
import {
  CreateConceptDto,
  EditConceptDto,
} from './dto';

@Injectable()
export class ConceptService {
  constructor(
    @InjectRepository(ConceptEntity)
    private conceptRepository: Repository<ConceptEntity>,
  ) {}

  getConcepts() {
    return this.conceptRepository.find();
  }

  async createConcept(concept: CreateConceptDto) {
    if (
      !concept.description ||
      !concept.quantity ||
      !concept.unit_price
    )
      throw new ForbiddenException(
        'The values are invalid',
      );
    const newConcept =
      this.conceptRepository.create(concept);
    return await this.conceptRepository.save(
      newConcept,
    );
  }

  async updateConcept(
    id: number,
    concept: EditConceptDto,
  ) {
    const conceptFound =
      await this.conceptRepository.findOne({
        where: {
          id,
        },
      });

    if (!conceptFound) {
      return new HttpException(
        'Concept not found',
        HttpStatus.NOT_FOUND,
      );
    }

    const updateConcept = Object.assign(
      conceptFound,
      concept,
    );
    return this.conceptRepository.save(
      updateConcept,
    );
  }

  async deleteConcept(id: number) {
    const conceptFound =
      await this.conceptRepository.findOne({
        where: {
          id,
        },
      });

    if (!conceptFound) {
      return new HttpException(
        'Concept not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.conceptRepository.delete({ id });
  }
}
