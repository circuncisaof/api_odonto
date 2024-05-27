import { IsEmail, IsString } from 'class-validator';

export class CreateUser {
  @IsString()
  name: string;
  @IsString()
  cpf: string;
  @IsString()
  rg: string;
  @IsString()
  birth_date: string;
  @IsString()
  age: string;
  @IsEmail()
  email: string;
  @IsString()
  cell_phone: string;
  @IsString()
  password: string;
}
