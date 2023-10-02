import {
  Body,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BillEntity } from 'src/typeorm/entities/bill.entity';
import { Repository } from 'typeorm';
import { CreateBillDto } from './dto/create-bill.dto';
import { EditBillDto } from './dto/edit-bill.dto';

@Injectable()
export class BillService {
  constructor(
    @InjectRepository(BillEntity)
    private billRepository: Repository<BillEntity>,
  ) {}

  async getBill(id: number) {
    const billFound =
      await this.billRepository.findOne({
        where: {
          id,
        },
      });

    if (!billFound) {
      return new HttpException(
        'Not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return billFound;
  }

  getBills() {
    return this.billRepository.find();
  }

  async createBill(bill: CreateBillDto) {
    if (!bill.total)
      throw new ForbiddenException(
        'The values are invalid',
      );
    const newBill =
      this.billRepository.create(bill);

    return await this.billRepository.save(
      newBill,
    );
  }

  async updateBill(
    id: number,
    bill: EditBillDto,
  ) {
    const billFound =
      await this.billRepository.findOne({
        where: {
          id,
        },
      });

    if (!billFound) {
      return new HttpException(
        'Bill not found',
        HttpStatus.NOT_FOUND,
      );
    }

    const updateBill = Object.assign(
      billFound,
      bill,
    );
    return this.billRepository.save(updateBill);
  }

  async deletebill(id: number) {
    const billFound =
      await this.billRepository.findOne({
        where: {
          id,
        },
      });

    if (!billFound) {
      return new HttpException(
        'Concept not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.billRepository.delete(id);
  }
}
