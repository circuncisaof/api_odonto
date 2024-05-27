import { PartialType } from '@nestjs/mapped-types';
import { CreateNotesDto } from './create-note.dto';

export class UpdatePartialNoteDto extends PartialType(CreateNotesDto) {}
