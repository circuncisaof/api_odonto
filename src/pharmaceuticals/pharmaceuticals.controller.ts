import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { PharmDto } from './dto/create-pharmaceuticals.dto';
import { PharmaceuticalsEntity } from './entities/pharmaticeuticals.entity';
import { PharmaceuticalsService } from './pharmaceuticals.service';
import { UpdatePharmDto } from './dto/update-pharmaceuticals.dto';

@Controller('pharm')
export class PharmaceuticalsController {
  constructor(private readonly pharmService: PharmaceuticalsService) {}

  @Post(':id')
  async create_address(
    @Body() pharmDto: PharmDto,
    @Param('id') id: string,
  ): Promise<PharmaceuticalsEntity> {
    return this.pharmService.create_address(pharmDto, id);
  }


  

  @Put(':id')
  async update(
    @Body() data: UpdatePharmDto, @Param('id') user_id:string
  ) {
    return this.pharmService.update(data,user_id)
  }
}
