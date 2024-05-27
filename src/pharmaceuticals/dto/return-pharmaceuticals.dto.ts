import { IsString } from 'class-validator';
import { PharmaceuticalsEntity } from '../entities/pharmaticeuticals.entity';

export class ReturnPharm {
  @IsString()
  id: string;
  @IsString()
  pharmaceuticals: string;
  constructor(pharm: PharmaceuticalsEntity) {
    this.id = pharm.id;

    this.pharmaceuticals = pharm.pharmaceuticals;
  }
}
