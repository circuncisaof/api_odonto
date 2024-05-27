import { IsString } from 'class-validator';

export class TreatmentsDto {
  @IsString()
  type_consultation: string;

  @IsString()
  start_in_consultation: string;

  @IsString()
  finish_in_consultation: string;
}
