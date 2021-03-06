import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsulationDetailsComponent } from './consulation-details/consulation-details.component';
import { ConsulationManageComponent } from './consulation-manage/consulation-manage.component';
import { ConsulationListComponent } from './consulation-list/consulation-list.component';
import { ComorbiditiesComponent } from './consulation-manage/comorbidities/comorbidities.component';
import { ExaminationsComponent } from './consulation-manage/examinations/examinations.component';
import { InvestigationsComponent } from './consulation-manage/investigations/investigations.component';
import { DiagnosisComponent } from './consulation-manage/diagnosis/diagnosis.component';
import { PrintComponent } from './print/print.component';
import { PatientdetailsComponent } from './consulation-manage/patientdetails/patientdetails.component';

// const flowRoutes: any[] =  [
//   {path: 'patientdetails', component: PatientdetailsComponent},
//   {path: 'comorbidities', component: ComorbiditiesComponent},
//   {path: 'examinations', component: ExaminationsComponent},
//   {path: 'investigations', component: InvestigationsComponent},
//   {path: 'diagnosis', component: DiagnosisComponent},
//   {path: 'print', component: PrintComponent},
//   {path: '', redirectTo: '/patientdetails', pathMatch: 'full'},
// ];

const routes: Routes = [
  {path: '', component: ConsulationListComponent},
  {path: ':cid', component: ConsulationDetailsComponent},
  {path: ':cid/manage', component: ConsulationManageComponent},
  {path: ':cid/manage/:step', component: ConsulationManageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationRoutingModule { }
