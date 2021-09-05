import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrefrenceRoutingModule } from './prefrence-routing.module';
import { PrefrenceComponent } from './prefrence.component';


@NgModule({
  declarations: [
    PrefrenceComponent
  ],
  imports: [
    CommonModule,
    PrefrenceRoutingModule
  ]
})
export class PrefrenceModule { }
