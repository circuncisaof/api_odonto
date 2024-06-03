import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateNotesDto } from './dto/create-note.dto';
import { NoteEntity } from './entities/note.entity';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(NoteEntity)
    private noteRepo: Repository<NoteEntity>,
    private userService: UserService,
  ) {}

  async create_note(
    noteCreate: CreateNotesDto,
    user_id: string,
  ): Promise<NoteEntity> {
    await this.userService.existsUserId(user_id);
    this.noteRepo.create({ ...noteCreate, user_id });
    return this.noteRepo.save({ ...noteCreate, user_id });
  }

  async update( data: UpdateNoteDto,
    user_id: string,){
      await this.userService.existsUserId(user_id);

      this.noteRepo.update(user_id, data)

    }
}
