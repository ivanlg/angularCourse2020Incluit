import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddContactPageRoutingModule } from './add-contact-page-routing.module';
import { AddContactPageComponent } from './add-contact-page.component';
import { ContactsModule } from 'src/app/features/contacts/contacts.module';


@NgModule({
  declarations: [AddContactPageComponent],
  imports: [
    CommonModule,
    AddContactPageRoutingModule,
    ContactsModule
  ]
})
export class AddContactPageModule { }
