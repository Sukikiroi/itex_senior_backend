import { Test, TestingModule } from '@nestjs/testing';
import { MedicalHistorysService } from './medical_historys.service';

describe('MedicalHistorysService', () => {
  let service: MedicalHistorysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalHistorysService],
    }).compile();

    service = module.get<MedicalHistorysService>(MedicalHistorysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
