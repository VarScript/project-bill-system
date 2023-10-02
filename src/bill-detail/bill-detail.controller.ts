import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BillDetailService } from './bill-detail.service';
import {
  CreateBillDetailDto,
  EditBillDetailDto,
} from './dto';
import { BillDetailEntity } from 'src/typeorm/entities/bill-detail.entity';

@Controller('bill-detail')
export class BillDetailController {
  constructor(
    private billDetatilService: BillDetailService,
  ) {}

  @Get(':id')
  getBill(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.billDetatilService.getBillDetail(id);
  }

  @Get()
  getBillDetal(): Promise<BillDetailEntity[]> {
    return this.billDetatilService.getBillDetails();
  }

  @Post()
  createBillDetail(
    @Body() createBillDetail: CreateBillDetailDto,
  ): Promise<BillDetailEntity> {
    return this.billDetatilService.createBillDetail(
      createBillDetail,
    );
  }

  @Patch(':id')
  updateBillDetail(
    @Body() updateBillDetail: EditBillDetailDto,
    @Param('id', ParseIntPipe) id: number
    
  ) {
    return this.billDetatilService.updateBillDetail(
      id,
      updateBillDetail,
    );
  }

  @Delete(':id')
  deleteBillDetail(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.billDetatilService.deleteBillDetail(
      id,
    );
  }
}
