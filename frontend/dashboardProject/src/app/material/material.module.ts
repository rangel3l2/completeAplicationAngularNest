import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {CdkTableModule} from '@angular/cdk/table';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


const COMPONENTS = [
  MatSliderModule,
  MatTableModule,
  MatToolbarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatSliderModule,
  MatListModule,
  MatSidenavModule,
  MatCardModule,
  CdkTableModule,
  MatMenuModule,
  FormsModule,





];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    COMPONENTS,

  ],
  exports: [
    COMPONENTS,
  ]
})
export class MaterialModule { }
