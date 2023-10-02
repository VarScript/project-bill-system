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
import { ThirdPartyBilledService } from './third-party-billed.service';
import { TpbEntity } from 'src/typeorm/entities/third_party_billed.entity';
import { CreateTpbDto, EdtiTpbDto } from './dto';

@Controller('third-party-billed')
export class ThirdPartyBilledController {
  constructor(
    private tpbService: ThirdPartyBilledService,
  ) {}

  @Get(':id')
  getBill(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.tpbService.getTpb(id);
  }

  @Get()
  getTpb(): Promise<TpbEntity[]> {
    return this.tpbService.getTpbs();
  }
  @Post()
  createTpb(@Body() tpb: CreateTpbDto) {
    return this.tpbService.createTpb(tpb);
  }

  @Patch(':id')
  updateTpb(
    @Body() tpb: EdtiTpbDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.tpbService.updateTpb(id, tpb);
  }

  @Delete(':id')
  deleteTpb(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.tpbService.deleteTpb(id);
  }

}
