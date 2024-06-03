import { UserEntity } from 'src/user/entity/user.entities';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'treatments' })
export class TreatmentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', nullable: false })
  user_id: string;
  
  @Column()
  type_consultation: string;

  @Column()
  start_in_consultation: string;

  @Column()
  finish_in_consultation: string;

  @OneToOne(() => UserEntity, (user) => user.pharmaceuticals)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user?: UserEntity;
}
