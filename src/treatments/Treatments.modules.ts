import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { TreatmentController } from './Treatments.controller';
import { TreatmentService } from './Treatments.service';
import { TreatmentsEntity } from './entities/treatments.entity';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([TreatmentsEntity])],
  controllers: [TreatmentController],
  providers: [TreatmentService],
})
export class TreatmentModule {}
