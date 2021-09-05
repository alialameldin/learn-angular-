import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminaccessGuard } from './adminaccess.guard';
import { AuthGuard } from './auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { AddCustomersComponent } from './customers/add-customers/add-customers.component';
import { CustomersComponent } from './customers/customers.component';
import { LoansTypeComponent } from './loans-type/loans-type.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrefrenceGuard } from './prefrence.guard';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { SuperadminGuard } from './superadmin.guard';
import { UnsavedGuard } from './unsaved.guard';


const routes: Routes = [
  {path:'product/:productid',component: ProductComponent},
  {path: 'client',component: ClientsComponent, canActivate:[AuthGuard,AdminGuard]},

  {
    path: 'admin',
    canActivate: [SuperadminGuard],
    children: [
      {
        path: '',
        component: AdminComponent,
      },
      {
        path: '',
        canActivateChild:[AdminaccessGuard],
        children: [
            {path: 'edit',component: AdminEditComponent},
            {path: 'delete',component: AdminDeleteComponent},
            {path: 'manage',component: AdminManageComponent},
        ]
      }
    ]
  },

  {path: 'settings', component:SettingsComponent},
  {path:'',redirectTo: 'client',pathMatch: 'full'},
  {path: 'search',component: SearchComponent, canDeactivate: [UnsavedGuard]},
  {path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },

  {path: 'customers',canLoad: [PrefrenceGuard], loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {path:'customers/add', component: AddCustomersComponent},
  {path:'loantype', component: LoansTypeComponent},


  {path: 'prefrence', canLoad: [PrefrenceGuard], loadChildren: () => import('./prefrence/prefrence.module').then(m => m.PrefrenceModule) },
  {path: '**', component: PageNotFoundComponent},
];

//for multiple router outlets :::: http://localhost:4200/primaryPath(namedOutlet:secondaryPath) :::: kol dah 34an tsh8l eletnin pathes m3 b3d f nafs elwa2t

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

