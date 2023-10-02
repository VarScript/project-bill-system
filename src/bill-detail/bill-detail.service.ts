import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BillDetailEntity } from 'src/typeorm/entities/bill-detail.entity';
import { Repository } from 'typeorm';
import {
  CreateBillDetailDto,
  EditBillDetailDto,
} from './dto';

@Injectable()
export class BillDetailService {
  constructor(
    @InjectRepository(BillDetailEntity)
    private billDetailRepository: Repository<BillDetailEntity>,
  ) {}

  async getBillDetail(id: number) {
    const billDetailFound =
      await this.billDetailRepository.findOne({
        where: {
          id,
        },
      });

    if (!billDetailFound) {
      return new HttpException(
        'Not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return billDetailFound;
  }

  getBillDetails() {
    return this.billDetailRepository.find();
  }

  async createBillDetail(
    billDetail: CreateBillDetailDto,
  ) {
    if (!billDetail.quantity)
      throw new ForbiddenException(
        'The values are invalid',
      );
    const newBillDetail =
      this.billDetailRepository.create(
        billDetail,
      );
    return await this.billDetailRepository.save(
      newBillDetail,
    );
  }

  async updateBillDetail(
    id: number,
    billDetail: EditBillDetailDto,
  ) {
    const billDetailFound =
      await this.billDetailRepository.findOne({
        where: {
          id,
        },
      });

    if (!billDetailFound) {
      return new HttpException(
        'Not found',
        HttpStatus.NOT_FOUND,
      );
    }

    const updateBillDetail = Object.assign(
      billDetailFound,
      billDetail,
    );
    return this.billDetailRepository.save(
      updateBillDetail,
    );
  }

  async deleteBillDetail(id: number) {
    const billDetailFound =
      await this.billDetailRepository.findOne({
        where: {
          id,
        },
      });

    if (!billDetailFound) {
      return new HttpException(
        'Not found',
        HttpStatus.NOT_FOUND,
      );
    }
    
    return this.billDetailRepository.delete({ id })
  }
}
