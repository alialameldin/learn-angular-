import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrefrenceComponent } from './prefrence.component';

const routes: Routes = [{ path: '', component: PrefrenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrefrenceRoutingModule { }
