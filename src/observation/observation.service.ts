import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { ObservationDto } from './dto/create-observation.dto';
import { ObservationEntity } from './entities/observation.entity';
import {  UpdateObsDto } from './dto/update-address.dto';

@Injectable()
export class ObservationService {
  constructor(
    @InjectRepository(ObservationEntity)
    private ObsRepo: Repository<ObservationEntity>,
    private userService: UserService,
  ) {}

  async create_observe(
    obsDto: ObservationDto,
    user_id: string,
  ): Promise<ObservationEntity> {
    await this.userService.find_id(user_id);
    this.ObsRepo.create({ ...obsDto, user_id });
    return this.ObsRepo.save({ ...obsDto, user_id });
  }

  async update(data: UpdateObsDto,user_id:string){
    await this.userService.find_id(user_id);

    return this.ObsRepo.update(user_id,data  );
  }
}
