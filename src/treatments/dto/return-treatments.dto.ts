import { IsString } from 'class-validator';
import { TreatmentsEntity } from '../entities/treatments.entity';

export class ReturnTreatments {
  @IsString()
  id: string;
  @IsString()
  type_consultation: string;

  @IsString()
  start_in_consultation: string;

  @IsString()
  finish_in_consultation: string;
  constructor(treatment: TreatmentsEntity) {
    this.id = treatment.id;

    this.type_consultation = treatment.type_consultation;
    this.start_in_consultation = treatment.start_in_consultation;
    this.finish_in_consultation = treatment.finish_in_consultation;
  }
}
