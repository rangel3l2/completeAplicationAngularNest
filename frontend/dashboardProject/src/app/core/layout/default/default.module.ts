import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../../material/material.module' 
import { ComponentsModule } from '../../components/components.module';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    ComponentsModule,
   
    
  ],


})
export class DefaultModule { }
