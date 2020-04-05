import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListContactPageComponent } from './list-contact-page.component';

const routes: Routes = [{ path: '', component: ListContactPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListContactPageRoutingModule { }
