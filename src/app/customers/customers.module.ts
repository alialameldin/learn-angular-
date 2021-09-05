import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import {FormsModule} from '@angular/forms';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { DeleteCustomersComponent } from './delete-customers/delete-customers.component'

@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomersComponent,
    EditCustomersComponent,
    DeleteCustomersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
