import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { DeleteContactsComponent } from './delete-contacts/delete-contacts.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';



@NgModule({
  declarations: [
    AddContactsComponent,
    DeleteContactsComponent,
    ViewContactsComponent,
    ListContactsComponent,
    EditContactsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
