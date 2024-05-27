import { IsString } from 'class-validator';

export class CreateNotesDto {
  @IsString()
  last_consultation: string;
  @IsString()
  next_consultation: string;
}
