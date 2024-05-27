import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { AddressEntity } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private addressRepo: Repository<AddressEntity>,
    private userService: UserService,
  ) {}

  async create_address(
    createAddress: CreateAddressDto,
    user_id: string,
  ): Promise<AddressEntity> {
    await this.userService.existsUserId(user_id);
    this.addressRepo.create({ ...createAddress, user_id });
    return this.addressRepo.save({ ...createAddress, user_id });
  }
}
