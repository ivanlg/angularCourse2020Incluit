import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './container/navbar.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
