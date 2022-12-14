import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './core/components/registration/registration.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { EcomerceComponent } from './core/components/ecomerce/ecomerce.component';
import { DefaultComponent } from './core/layout/default/default.component';

const routes: Routes = [
  {
    path: '',
    component:DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent,

      },
    
      {
        path: 'ecomerce',
        component: EcomerceComponent,

      },
    
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
