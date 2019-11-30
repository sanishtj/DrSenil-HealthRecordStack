import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientManageComponent } from './patient-manage/patient-manage.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/patient.reducer';
import { PatientEffects } from './state/patient.effects';


@NgModule({
  declarations: [PatientListComponent, PatientDetailsComponent, PatientManageComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    SharedModule,
    StoreModule.forFeature('patients', reducer),
    EffectsModule.forFeature(
      [ PatientEffects ]
    ),
  ]
})
export class PatientsModule { }
