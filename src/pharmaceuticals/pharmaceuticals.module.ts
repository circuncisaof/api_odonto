import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { PharmaceuticalsEntity } from './entities/pharmaticeuticals.entity';
import { PharmaceuticalsController } from './pharmaceuticals.controller';
import { PharmaceuticalsService } from './pharmaceuticals.service';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([PharmaceuticalsEntity])],
  controllers: [PharmaceuticalsController],
  providers: [PharmaceuticalsService],
})
export class PharmaceuticalsModule {}
