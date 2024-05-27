import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { PharmDto } from './dto/create-pharmaceuticals.dto';
import { PharmaceuticalsEntity } from './entities/pharmaticeuticals.entity';

@Injectable()
export class PharmaceuticalsService {
  constructor(
    @InjectRepository(PharmaceuticalsEntity)
    private pharmRepo: Repository<PharmaceuticalsEntity>,
    private userService: UserService,
  ) {}

  async create_address(
    pharmDto: PharmDto,
    user_id: string,
  ): Promise<PharmaceuticalsEntity> {
    await this.userService.find_id(user_id);
    this.pharmRepo.create({ ...pharmDto, user_id });

    return this.pharmRepo.save({ ...pharmDto, user_id });
  }
}
