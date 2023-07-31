import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType, ForbiddenError, InferSubjects, MatchConditions, MongoAbility, createMongoAbility } from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { Appointment } from "src/appointments/entities/appointment.entity";
import { Action } from "src/common/enums/permission.enum";
import { Doctor } from "src/doctors/entities/doctor.entity";
import { MedicalHistory } from "src/medical_historys/entities/medical_history.entity";
import { Patient } from "src/patients/entities/patient.entity";
import { Prescription } from "src/prescriptions/entities/prescription.entity";
import { User } from "src/users/entities/user.entity";

type Subjects = InferSubjects<typeof Appointment | typeof User | typeof Doctor | typeof Patient | typeof MedicalHistory | typeof Prescription> | 'all';
export type AppAbility = MongoAbility<[Action, Subjects]>


@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    const { can, cannot, build } = new AbilityBuilder<AppAbility>(createMongoAbility)


    if (user.type = 'SAdmin') {
      can(Action.Manage, 'all'); // read-write access to everything
    }

    if (user.type = 'staff') {
      can(Action.Read, 'all'); // read-only access to everything
    }
    else {
      cannot(Action.Read, Appointment, { id: { $ne: user.id } }).because('Only owner can read his Appointments ');
      cannot(Action.Delete, Prescription, { id: { $ne: user.id } }).because('Only owner can delete his own Prescription ');

    }



    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,


    });
  }
}