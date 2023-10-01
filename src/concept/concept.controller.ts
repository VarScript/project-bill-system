import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ConceptService } from './concept.service';
import { CreateConceptDto, EditConceptDto } from './dto';
import { ConceptEntity } from 'src/typeorm/entities/concept.entity';

@Controller('concept')
export class ConceptController {
  constructor(
    private conceptService: ConceptService,
  ) {}

  @Get()
  getConcepts(): Promise<ConceptEntity[]> {
    return this.conceptService.getConcepts();
  }

  @Post()
  createConcept(
    @Body() createConcept: CreateConceptDto,
  ): Promise<ConceptEntity> {
    return this.conceptService.createConcept(
      createConcept,
    );
  }

  @Patch(':id')
  updateConcept(@Body() updateConcept: EditConceptDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.conceptService.updateConcept(id, updateConcept);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteConcept(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.conceptService.deleteConcept(id);
  }
}