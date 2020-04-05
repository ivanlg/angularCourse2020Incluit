import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'addContactPage', loadChildren: () => import('./pages/add-contact-page/add-contact-page.module').then(m => m.AddContactPageModule) },
  { path: '',
    redirectTo: '/addContactPage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
