import { IsString } from 'class-validator';
import { NoteEntity } from '../entities/note.entity';

export class ReturnNoteDto {
  @IsString()
  id: string;
  @IsString()
  last_consultation: string;
  @IsString()
  next_consultation: string;

  constructor(noteEntity: NoteEntity) {
    this.id = noteEntity.id;
    this.next_consultation = noteEntity.next_consultation;
    this.last_consultation = noteEntity.last_consultation;
  }
}
