import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { CustomersComponent } from './customers.component';
import { DeleteCustomersComponent } from './delete-customers/delete-customers.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'add', component: AddCustomersComponent },
  { path: 'update', component: EditCustomersComponent },
  { path: 'delete', component: DeleteCustomersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
