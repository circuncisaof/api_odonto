import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { CreateNotesDto } from './dto/create-note.dto';
import { NoteService } from './note.service';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('note')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post(':id')
  create_note(@Body() noteDto: CreateNotesDto, @Param('id') id: string) {
    return this.noteService.create_note(noteDto, id);
  }

  @Put(':id')
  update(@Body() noteDto: UpdateNoteDto, @Param('id') id: string) {
    return this.noteService.update(noteDto, id);
  }
}
