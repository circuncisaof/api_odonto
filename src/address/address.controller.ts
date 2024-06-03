import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { AddressEntity } from './entities/address.entity';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post(':id')
  async create_address(
    @Body() createAddress: CreateAddressDto,
    @Param('id') id: string,
  ): Promise<AddressEntity> {
    return this.addressService.create_address(createAddress, id);
  }
  @Put(':id')
  async update(
    @Body() update_address: UpdateAddressDto,
    id: string,
  ) {
    return this.addressService.update(update_address,id );
  }
}
