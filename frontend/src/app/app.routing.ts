import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  { path: '', component: UserLayoutComponent,
       children: [
       {
        path: '', loadChildren: './user/user-layout/user-layout.module#UserLayoutModule',     // canActivate: [AuthGuardService]
       }]},

  { path: '**', component:  PagenotfoundComponent},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule
  ],
  exports: []
})
export class AppRoutingModule { }
