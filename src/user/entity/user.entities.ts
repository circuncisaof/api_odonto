import { AddressEntity } from 'src/address/entities/address.entity';
import { NoteEntity } from 'src/note/entities/note.entity';
import { ObservationEntity } from 'src/observation/entities/observation.entity';
import { PharmaceuticalsEntity } from 'src/pharmaceuticals/entities/pharmaticeuticals.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  cpf: string;
  @Column({ nullable: false })
  rg: string;
  @Column({ type: 'date', nullable: false })
  birth_date: string;
  @Column({ nullable: false })
  age: string;
  @Column({ nullable: false, unique: true })
  email: string;
  @Column({ nullable: false })
  cell_phone: string;
  @Column({ nullable: false })
  password: string;
  @CreateDateColumn()
  createdAt: string;
  @UpdateDateColumn()
  updateAt: string;
  @OneToOne(() => AddressEntity, (address) => address.user)
  address?: AddressEntity;

  @OneToOne(() => ObservationEntity, (obs) => obs.user)
  obs?: ObservationEntity;
  @OneToOne(() => PharmaceuticalsEntity, (pharm) => pharm.user)
  pharmaceuticals?: PharmaceuticalsEntity;

  @OneToOne(() => NoteEntity, (note) => note.user)
  note?: NoteEntity;
}
