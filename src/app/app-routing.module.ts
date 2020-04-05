import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'addContactPage', loadChildren: () => import('./pages/add-contact-page/add-contact-page.module').then(m => m.AddContactPageModule) },
  { path: 'listContactPage', loadChildren: () => import('./pages/list-contact-page/list-contact-page.module').then(m => m.ListContactPageModule) },
  { path: 'home',
    redirectTo: '/listContactPage',
    pathMatch: 'full'
  },
  { path: '',
    redirectTo: '/listContactPage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
