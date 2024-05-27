import { CreateAddressDto } from 'src/address/dto/create-address.dto';
import { CreateNotesDto } from 'src/note/dto/create-note.dto';
import { ObservationDto } from 'src/observation/dto/create-observation.dto';
import { PharmDto } from 'src/pharmaceuticals/dto/create-pharmaceuticals.dto';
import { UserEntity } from '../entity/user.entities';

export class ReturnUserDto {
  id: string;
  name: string;
  cpf: string;
  rg: string;
  birth_date: string;
  age: string;
  email: string;
  cell_phone: string;
  address?: CreateAddressDto;
  obs?: ObservationDto;
  pharmaceuticals?: PharmDto;
  note?: CreateNotesDto;

  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.age = userEntity.age;
    this.email = userEntity.email;
    this.cell_phone = userEntity.cell_phone;
    this.cpf = userEntity.cpf;
    this.rg = userEntity.rg;
    this.birth_date = userEntity.birth_date;
    this.address = userEntity.address;
    this.pharmaceuticals = userEntity.pharmaceuticals;
    this.note = userEntity.note, 
    this.obs = userEntity.obs;
  }
}
