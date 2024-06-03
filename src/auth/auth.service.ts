import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { ReturnUserDto } from 'src/user/dto/return-user.dto';
import { UserEntity } from 'src/user/entity/user.entities';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';
import { LoginPayload } from './dto/login-payload.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly usersRepo: Repository<UserEntity>,
    private readonly userService: UserService,
  ) {}

  async auth({ email, password }: AuthDto) {
    console.log(`auth service ${email},${password}`)
    const user = await this.usersRepo.findOneBy({
      email,
    });

    const comparehash = bcrypt.compare(user.password, password);

    if (!user || !comparehash || user && comparehash === null) {
      throw new UnauthorizedException('Email or password incorrect');
    }
    return {
      accessToken: this.jwtService.sign({
        ...new LoginPayload(user),
      }),
      user: new ReturnUserDto(user),
    };
  }
}
