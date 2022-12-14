import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardGrathsComponent } from './dashboard/card-graths/card-graths.component';
import { CardsIntroComponent } from './dashboard/cards-intro/cards-intro.component';
import { LineChartComponent } from './dashboard/card-graths/line-chart/line-chart.component';
import { TableDataComponent } from './dashboard/table-data/table-data.component';
import { BarChartComponent } from './dashboard/card-graths/bar-chart/bar-chart.component';
import { EcomerceComponent } from './ecomerce/ecomerce.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListSelectionComponent } from './dashboard/list-selection/list-selection.component';


const COMPONENTS = [
  SideBarComponent,
  MenuBarComponent,
  FooterComponent,
  DashboardComponent,
  CardGrathsComponent,
  CardsIntroComponent,
  LineChartComponent,
  TableDataComponent,
  BarChartComponent,
  EcomerceComponent,
  RegistrationComponent,
  ListSelectionComponent



]
@NgModule({
  declarations: [COMPONENTS,],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule, 


  ],
  exports:[
    COMPONENTS,
  ]

})
export class ComponentsModule { }
