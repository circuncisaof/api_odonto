import { IsString } from 'class-validator';
import { ObservationEntity } from '../entities/observation.entity';

export class ObservationReturn {
  @IsString()
  observation: string;

  constructor(Obs: ObservationEntity) {
    this.observation = Obs.observation;
  }
}
