import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddContactPageComponent } from './add-contact-page.component';

const routes: Routes = [{ path: '', component: AddContactPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddContactPageRoutingModule { }
