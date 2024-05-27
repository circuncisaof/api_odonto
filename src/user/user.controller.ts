import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { LogInterceptor } from 'src/interceptors/log.interceptor';
import { CreateUser } from './dto/create-user.dto';
import { ReturnUserDto } from './dto/return-user.dto';
import { PartialUpdate } from './dto/update-partial-user';
import { UpdateUser } from './dto/update-user.dto';
import { UserEntity } from './entity/user.entities';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseInterceptors(LogInterceptor)
  @Post()
  async create_user(@Body() user: CreateUser) {
    return this.userService.create_user(user);
  }

  @Get()
  async get_users(): Promise<ReturnUserDto[]> {
    return (await this.userService.find_all()).map(
      (userEntity) => new ReturnUserDto(userEntity),
    );
  }

  @Get(':id')
  async get_user_id(@Param('id') id: string): Promise<ReturnUserDto> {
    return this.userService.find_id(id);
  }

  @Put(':id')
  async update(
    @Body() data: UpdateUser,
    @Param('id') id: string,
  ): Promise<UserEntity> {
    this.userService.existsUserId(id);
    return this.userService.update_user(data, id);
  }

  @Patch(':id')
  async patch(
    @Body() data: PartialUpdate,
    @Param('id') id: string,
  ): Promise<UserEntity> {
    this.userService.existsUserId(id);
    return this.userService.update_user_partial(data, id);
  }

  @Delete(':id')
  async delete_user(@Param('id') id: string) {
    this.userService.existsUserId(id);
    return this.userService.delete_user(id);
  }
}
