import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateNotesDto } from './dto/create-note.dto';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post(':id')
  create_note(@Body() noteDto: CreateNotesDto, @Param('id') id: string) {
    return this.noteService.create_note(noteDto, id);
  }
}
