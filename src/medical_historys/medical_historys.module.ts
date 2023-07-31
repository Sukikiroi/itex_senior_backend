import { Module } from '@nestjs/common';
import { MedicalHistorysService } from './medical_historys.service';
import { MedicalHistorysController } from './medical_historys.controller';

@Module({
  controllers: [MedicalHistorysController],
  providers: [MedicalHistorysService]
})
export class MedicalHistorysModule {}
