import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { ObservationDto } from './dto/create-observation.dto';
import { ObservationEntity } from './entities/observation.entity';

@Injectable()
export class ObservationService {
  constructor(
    @InjectRepository(ObservationEntity)
    private ObsRepo: Repository<ObservationEntity>,
    private user: UserService,
  ) {}

  async create_observe(
    obsDto: ObservationDto,
    user_id: string,
  ): Promise<ObservationEntity> {
    await this.user.find_id(user_id);
    this.ObsRepo.create({ ...obsDto, user_id });
    return this.ObsRepo.save({ ...obsDto, user_id });
  }
}
