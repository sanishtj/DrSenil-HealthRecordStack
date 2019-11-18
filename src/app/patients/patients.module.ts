import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientManageComponent } from './patient-manage/patient-manage.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PatientListComponent, PatientDetailsComponent, PatientManageComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    SharedModule
  ]
})
export class PatientsModule { }
