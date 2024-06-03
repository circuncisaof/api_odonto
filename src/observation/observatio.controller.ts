import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ObservationDto } from './dto/create-observation.dto';
import { ObservationEntity } from './entities/observation.entity';
import { ObservationService } from './observation.service';

@Controller('obs')
export class ObservationController {
  constructor(private readonly obsService: ObservationService) {}

  @Post(':id')
  async create_obser_user(
    @Body() obsDto: ObservationDto,
    @Param('id') id: string,
  ): Promise<ObservationEntity> {
    return await this.obsService.create_observe(obsDto, id);
  }

  @Put(':id')
  async update(
    @Body() obsDto: ObservationDto,
    @Param('id') id: string,
  ) {
    return await this.obsService.update(obsDto, id);
  }
    
    
}
