import { UserEntity } from 'src/user/entity/user.entities';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'pharmaceuticals' })
export class PharmaceuticalsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', nullable: false })
  user_id: string;
  @Column()
  pharmaceuticals: string;

  @OneToOne(() => UserEntity, (user) => user.pharmaceuticals)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user?: UserEntity;
}
