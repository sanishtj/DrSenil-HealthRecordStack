import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsulationDetailsComponent } from './consulation-details/consulation-details.component';
import { ConsulationManageComponent } from './consulation-manage/consulation-manage.component';
import { ConsulationListComponent } from './consulation-list/consulation-list.component';
import { ComorbiditiesComponent } from './comorbidities/comorbidities.component';
import { ExaminationsComponent } from './examinations/examinations.component';
import { InvestigationsComponent } from './investigations/investigations.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { PrintComponent } from './print/print.component';

const flowRoutes: any[] =  [
  {path: 'comorbidities', component: ComorbiditiesComponent},
  {path: 'examinations', component: ExaminationsComponent},
  {path: 'investigations', component: InvestigationsComponent},
  {path: 'diagnosis', component: DiagnosisComponent},
  {path: 'print', component: PrintComponent},
  {path: '', redirectTo: '/comorbidities', pathMatch: 'full'},
];

const routes: Routes = [
  {path: '', component: ConsulationListComponent},
  {path: ':cid', component: ConsulationDetailsComponent, children: flowRoutes},
  {path: ':cid/manage', component: ConsulationManageComponent, children: flowRoutes }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationRoutingModule { }
