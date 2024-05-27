import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { ObservationEntity } from './entities/observation.entity';
import { ObservationController } from './observatio.controller';
import { ObservationService } from './observation.service';

@Module({
  imports: [TypeOrmModule.forFeature([ObservationEntity]), UserModule],
  controllers: [ObservationController],
  providers: [ObservationService],
})
export class ObservationModule {}
