import { Body, Controller, Param, Post } from '@nestjs/common';
import { TreatmentService } from './Treatments.service';
import { TreatmentsDto } from './dto/create-treatments.dto';
import { TreatmentsEntity } from './entities/treatments.entity';

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
}
