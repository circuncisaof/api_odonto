import { PartialType } from '@nestjs/mapped-types';
import { TreatmentsDto } from './create-treatments.dto';

export class PartialUpdate extends PartialType(TreatmentsDto) {}
