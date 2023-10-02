import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TpbEntity } from 'src/typeorm/entities/third_party_billed.entity';
import { Repository } from 'typeorm';
import { CreateTpbDto, EdtiTpbDto } from './dto';

@Injectable()
export class ThirdPartyBilledService {
  constructor(
    @InjectRepository(TpbEntity)
    private tpbRepository: Repository<TpbEntity>,
  ) {}

  getTpb() {
    return this.tpbRepository.find();
  }
  async createTpb(tpb: CreateTpbDto) {
    if (!tpb.name || !tpb.phone || !tpb.address)
      throw new ForbiddenException(
        'The values are invalid',
      );
    const newTpb = this.tpbRepository.create(tpb);
    return await this.tpbRepository.save(newTpb);
  }

  async updateTpb(id: number, tpb: EdtiTpbDto) {
    const tpbFound =
      await this.tpbRepository.findOne({
        where: {
          id,
        },
      });

    if (!tpbFound) {
      return new HttpException(
        'Concept not found',
        HttpStatus.NOT_FOUND,
      );
    }

    const updateConcept = Object.assign(
      tpbFound,
      tpb,
    );
    return this.tpbRepository.save(updateConcept);
  }

  async deleteTpb(id: number) {
    const tpbFound =
      await this.tpbRepository.findOne({
        where: {
          id,
        },
      });

    if (!tpbFound) {
      return new HttpException(
        'Concept not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.tpbRepository.delete({ id });
  }
}
