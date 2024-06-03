import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUser } from './dto/create-user.dto';
import { PartialUpdate } from './dto/update-partial-user';
import { UpdateUser } from './dto/update-user.dto';
import { UserEntity } from './entity/user.entities';
import { TypeUser } from 'src/enum/type_user.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepo: Repository<UserEntity>,
  ) {}

  async create_user(data: CreateUser) {
    data.password = await this.convertPassBcrypt(data.password);
    await this.existUser(data.email);
    const user = await this.usersRepo.create(data);

    return this.usersRepo.save(user);
  }

  async find_all(): Promise<UserEntity[]> {
    return this.usersRepo.find({
      where:{ type_user:TypeUser.user}
    });
  }

  async find_id(id: string): Promise<UserEntity> {
    return this.usersRepo.findOne({
      where: { id:id, type_user:TypeUser.user },
      relations: ['address', 'obs', 'pharmaceuticals', 'note','treat'],
    });
  }

  async update_user(data: UpdateUser, id: string) {
    await this.find_id(id);
    await this.usersRepo.update(id, data);
    return this.find_id(id);
  }

  async update_user_partial(data: PartialUpdate, id: string) {
    await this.find_id(id);

    this.usersRepo.update(id, data);

    return this.find_id(id);
  }

  async delete_user(id: string) {
    await this.existsUserId(id);
    await this.usersRepo.delete(id);
    throw new BadRequestException('User deleted!');
  }

  async existsUserId(id: string) {
    const existUser = await this.find_id(id);
    if (!existUser) {
      throw new BadRequestException('is not exist ');
    }

    return existUser;
  }

  async convertPassBcrypt(pass: string) {
    const saltOrRounds = 10;

    return await bcrt.hash(pass, saltOrRounds);
  }

  async existUser(email: string) {
    const res = this.usersRepo.exists({ where: { email } });
    if (!res) {
      throw new BadGatewayException('Email exist');
    }
  }
}
