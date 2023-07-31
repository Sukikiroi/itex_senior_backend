import { Test, TestingModule } from '@nestjs/testing';
import { MedicalHistorysController } from './medical_historys.controller';
import { MedicalHistorysService } from './medical_historys.service';

describe('MedicalHistorysController', () => {
  let controller: MedicalHistorysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalHistorysController],
      providers: [MedicalHistorysService],
    }).compile();

    controller = module.get<MedicalHistorysController>(MedicalHistorysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
