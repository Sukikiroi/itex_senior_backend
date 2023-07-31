import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType, ForbiddenError, InferSubjects, MatchConditions, MongoAbility, createMongoAbility } from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { Appointment } from "src/appointments/entities/appointment.entity";
import { Action } from "src/common/enums/permission.enum";
import { Doctor } from "src/doctors/entities/doctor.entity";
import { Patient } from "src/patients/entities/patient.entity";
import { User } from "src/users/entities/user.entity";

type Subjects = InferSubjects<typeof Appointment | typeof User | typeof Doctor> | 'all';
export type AppAbility = MongoAbility<[Action, Subjects]>


@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    const { can, cannot, build } = new AbilityBuilder<AppAbility>(createMongoAbility)


    if (user.type = 'SAdmin') {
      can(Action.Manage, 'all'); // read-write access to everything
    } else {
      can(Action.Read, 'all'); // read-only access to everything
      cannot(Action.Read, Appointment, { id: { $eq: 1 } }).because('Only owner');




    }



    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,


    });
  }
}