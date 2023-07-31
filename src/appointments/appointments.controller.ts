import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { PoliciesGuard } from 'src/common/guards/policies.guard';
import { CheckPolicies } from 'src/common/decorators/policies.decorator';
import { AppAbility, CaslAbilityFactory } from 'src/casl/casl-ability.factory/casl-ability.factory';
import { Action } from 'src/common/enums/permission.enum';
import { Appointment } from './entities/appointment.entity';
import { User } from 'src/users/entities/user.entity';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("appointments")
@Controller('appointments')
export class AppointmentsController {
  constructor(
    private readonly appointmentsService: AppointmentsService,
    private caslAbilityFactory: CaslAbilityFactory
  ) { }

  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentsService.create(createAppointmentDto);
  }
  @UseGuards(AuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, Appointment))
  @Get()
  findAll() {
    return this.appointmentsService.findAll();


  }



  @Get(':id')
  @UseGuards(AuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, Appointment))
  async findOne(@Param('id') id: string, @Req() req) {
    const ability = this.caslAbilityFactory.createForUser(req.user);
    const appointment = this.appointmentsService.findOne(+id);
    if (ability.can(Action.Read, await appointment)) {
      // Authorized only to read his own appointemnts
      return this.appointmentsService.findOne(+id);
    }
  }

  @Patch(':id')
  @UseGuards(AuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, Appointment))
  update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentsService.update(+id, updateAppointmentDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Delete, Appointment))
  remove(@Param('id') id: string) {
    return this.appointmentsService.remove(+id);
  }
}
