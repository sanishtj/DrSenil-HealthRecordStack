import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then(m => m.ProfileModule),
      data: {isPreLogin: true, animation: 'profile'}
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        m => m.AuthenticationModule
      ),
      data: {isPreLogin: true, animation: 'auth'}
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      data: {isPreLogin: false}
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./patients/patients.module').then(m => m.PatientsModule),
      data: {isPreLogin: false}
  },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: '**', redirectTo: '/profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
