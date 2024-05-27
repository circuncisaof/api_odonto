import { IsString } from 'class-validator';

export class ObservationDto {
  @IsString()
  observation: string;
}
