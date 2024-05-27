import { Body, Controller, Param, Post } from '@nestjs/common';
import { PharmDto } from './dto/create-pharmaceuticals.dto';
import { PharmaceuticalsEntity } from './entities/pharmaticeuticals.entity';
import { PharmaceuticalsService } from './pharmaceuticals.service';

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
}
