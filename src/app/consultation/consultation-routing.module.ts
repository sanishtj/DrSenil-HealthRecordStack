import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsulationDetailsComponent } from './consulation-details/consulation-details.component';
import { ConsulationManageComponent } from './consulation-manage/consulation-manage.component';
import { ConsulationListComponent } from './consulation-list/consulation-list.component';


const routes: Routes = [
  {path: '', component: ConsulationListComponent},
  {path: ':cid', component: ConsulationDetailsComponent},
  {path: ':id/manage', component: ConsulationManageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationRoutingModule { }
