import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlighDirective } from './highligh.directive';
import { UsersComponent } from './users/users.component';
import { LoansComponent } from './loans/loans.component';
import { LoansTypeComponent } from './loans-type/loans-type.component';
import { AddloansComponent } from './addloans/addloans.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonInterceptor } from './common.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HighlighDirective,
    UsersComponent,
    LoansComponent,
    LoansTypeComponent,
    AddloansComponent,
    ProductComponent,
    ClientsComponent,
    SearchComponent,
    PageNotFoundComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [
    {provide: LocationStrategy,useClass: PathLocationStrategy },
    {provide: HTTP_INTERCEPTORS,useClass: CommonInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
