import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateNotesDto } from './dto/create-note.dto';
import { NoteEntity } from './entities/note.entity';

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
}
