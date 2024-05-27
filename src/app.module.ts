import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { AddressEntity } from './address/entities/address.entity';
import { AuthModule } from './auth/auth.module';
import { NoteEntity } from './note/entities/note.entity';
import { NoteModule } from './note/note.module';
import { ObservationEntity } from './observation/entities/observation.entity';
import { ObservationModule } from './observation/observation.module';
import { PharmaceuticalsEntity } from './pharmaceuticals/entities/pharmaticeuticals.entity';
import { PharmaceuticalsModule } from './pharmaceuticals/pharmaceuticals.module';
import { TreatmentModule } from './treatments/Treatments.modules';
import { TreatmentsEntity } from './treatments/entities/treatments.entity';
import { UserEntity } from './user/entity/user.entities';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    AddressModule,
    ObservationModule,
    AuthModule,
    PharmaceuticalsModule,
    NoteModule,
    TreatmentModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mari0001',
      database: 'postgres',
      entities: [
        UserEntity,
        AddressEntity,
        ObservationEntity,
        PharmaceuticalsEntity,
        NoteEntity,
        TreatmentsEntity,
      ],
      synchronize: true,
      logging: false,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
