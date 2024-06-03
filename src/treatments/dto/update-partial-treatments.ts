import { PartialType } from '@nestjs/mapped-types';
import { TreatmentsDto } from './create-treatments.dto';

export class PartialUpdateTreat extends PartialType(TreatmentsDto) {}
