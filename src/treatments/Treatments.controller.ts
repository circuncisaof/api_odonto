import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { TreatmentService } from './Treatments.service';
import { TreatmentsDto } from './dto/create-treatments.dto';
import { TreatmentsEntity } from './entities/treatments.entity';
import { PartialUpdateTreat } from './dto/update-partial-treatments';
import { UpdateTreatDto } from './dto/update-treatments.dto';

@Controller('treat')
export class TreatmentController {
  constructor(private readonly treatService: TreatmentService) {}

  @Post(':id')
  async create_address(
    @Body() treat: TreatmentsDto,
    @Param('id') id: string,
  ): Promise<TreatmentsEntity> {
    return this.treatService.create_address(treat, id);
  }

  @Patch(':id')
  async patch(
    @Body() data: PartialUpdateTreat, @Param('id') user_id:string
  ) {
    return this.treatService.update_partial(data,user_id)
  }

  @Put(':id')
  async update_(
    @Body() data: UpdateTreatDto, @Param('id') user_id:string
  ) {
    return this.treatService.update(data,user_id)
  }
}
