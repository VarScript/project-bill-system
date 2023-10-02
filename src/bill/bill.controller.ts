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
import { BillService } from './bill.service';
import { BillEntity } from 'src/typeorm/entities/bill.entity';
import { CreateBillDto } from './dto/create-bill.dto';
import { EditBillDto } from './dto/edit-bill.dto';

@Controller('bill')
export class BillController {
  constructor(private billService: BillService) {}

  @Get(':id')
  getBill(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.billService.getBill(id);
  }

  @Get()
  getBills(): Promise<BillEntity[]> {
    return this.billService.getBills();
  }

  @Post()
  createBill(
    @Body() createBill: CreateBillDto,
  ) {
    return this.billService.createBill(
      createBill,
    );
  }

  @Patch(':id')
  updateBill(
    @Body() updateBill: EditBillDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.billService.updateBill(
      id,
      updateBill,
    );
  }

  @Delete(':id')
  deleteBill(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.billService.deletebill(id);
  }
}
