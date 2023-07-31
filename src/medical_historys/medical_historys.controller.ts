import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MedicalHistorysService } from './medical_historys.service';
import { CreateMedicalHistoryDto } from './dto/create-medical_history.dto';
import { UpdateMedicalHistoryDto } from './dto/update-medical_history.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';


@ApiTags('medical-historys')
@Controller('medical-historys')
export class MedicalHistorysController {
  constructor(private readonly medicalHistorysService: MedicalHistorysService) {}


  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
@ApiResponse({ status: 403, description: 'Forbidden.'})
@ApiBearerAuth()
  @Post()
  create(@Body() createMedicalHistoryDto: CreateMedicalHistoryDto) {
    return this.medicalHistorysService.create(createMedicalHistoryDto);
  }

  @ApiOperation({
		summary: 'Retrieve many Medical Historys 👻'
	})
  @Get()
  findAll() {
    return this.medicalHistorysService.findAll();
  }


  @ApiBearerAuth()
	@UseGuards(AuthGuard)
	@ApiOperation({
		summary: 'Retrieve one Medical History 👻'
	})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalHistorysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalHistoryDto: UpdateMedicalHistoryDto) {
    return this.medicalHistorysService.update(+id, updateMedicalHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalHistorysService.remove(+id);
  }
}
