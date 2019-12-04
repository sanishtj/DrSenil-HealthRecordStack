import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultationRoutingModule } from './consultation-routing.module';
import { ConsulationListComponent } from './consulation-list/consulation-list.component';
import { ConsulationDetailsComponent } from './consulation-details/consulation-details.component';
import { ComorbiditiesComponent } from './comorbidities/comorbidities.component';
import { ExaminationsComponent } from './examinations/examinations.component';
import { InvestigationsComponent } from './investigations/investigations.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { PrintComponent } from './print/print.component';
import { ConsulationManageComponent } from './consulation-manage/consulation-manage.component';
import { SharedModule } from '../shared/shared.module';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';

@NgModule({
  declarations: [
    ConsulationListComponent,
    ConsulationDetailsComponent,
    ComorbiditiesComponent,
    ExaminationsComponent,
    InvestigationsComponent,
    DiagnosisComponent,
    PrintComponent,
    ConsulationManageComponent,
    PatientdetailsComponent
  ],
  imports: [CommonModule, ConsultationRoutingModule, SharedModule]
})
export class ConsultationModule {}
