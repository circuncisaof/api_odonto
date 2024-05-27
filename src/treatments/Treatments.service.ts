import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { TreatmentsDto } from './dto/create-treatments.dto';
import { TreatmentsEntity } from './entities/treatments.entity';

@Injectable()
export class TreatmentService {
  constructor(
    @InjectRepository(TreatmentsEntity)
    private treatRepo: Repository<TreatmentsEntity>,
    private userService: UserService,
  ) {}

  async create_address(
    treat: TreatmentsDto,
    user_id: string,
  ): Promise<TreatmentsEntity> {
    await this.userService.find_id(user_id);
    this.treatRepo.create({ ...treat, user_id });
    return this.treatRepo.save({ ...treat, user_id });
  }
}
