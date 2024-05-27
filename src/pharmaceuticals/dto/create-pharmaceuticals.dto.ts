import { IsString } from 'class-validator';

export class PharmDto {
  @IsString()
  pharmaceuticals: string;
}
