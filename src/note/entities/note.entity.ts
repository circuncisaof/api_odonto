import { UserEntity } from 'src/user/entity/user.entities';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Note' })
export class NoteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', nullable: false })
  user_id: string;
  @Column()
  last_consultation: string;

  @Column()
  next_consultation: string;

  @OneToOne(() => UserEntity, (user) => user.note)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user?: UserEntity;
}
