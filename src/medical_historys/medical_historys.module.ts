import { Module } from '@nestjs/common';
import { MedicalHistorysService } from './medical_historys.service';
import { MedicalHistorysController } from './medical_historys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalHistory } from './entities/medical_history.entity';
import { CaslModule } from 'src/casl/casl.module';

@Module({
  imports:[TypeOrmModule.forFeature([MedicalHistory]),CaslModule],
  controllers: [MedicalHistorysController],
  providers: [MedicalHistorysService]
})
export class MedicalHistorysModule {}
