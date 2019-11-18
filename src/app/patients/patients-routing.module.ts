import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientManageComponent } from './patient-manage/patient-manage.component';


const routes: Routes = [
  {path: '', component: PatientListComponent, data: {animation: 'patients'}},
  {path: ':id', component: PatientDetailsComponent, data: {animation: 'patient'}},
  {path: ':id/manage', component: PatientManageComponent, data: {animation: 'managepatient'}},
  {path: ':id/consultations', loadChildren: () =>
  import('../consultation/consultation.module').then(m => m.ConsultationModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
