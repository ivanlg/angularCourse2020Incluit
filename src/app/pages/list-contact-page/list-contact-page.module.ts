import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListContactPageRoutingModule } from './list-contact-page-routing.module';
import { ListContactPageComponent } from './list-contact-page.component';
import { ContactsModule } from 'src/app/features/contacts/contacts.module';


@NgModule({
  declarations: [ListContactPageComponent],
  imports: [
    CommonModule,
    ListContactPageRoutingModule,
    ContactsModule
  ]
})
export class ListContactPageModule { }
