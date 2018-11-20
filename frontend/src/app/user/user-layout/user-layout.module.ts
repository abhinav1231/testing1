import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRoutes } from './user.routing';
import { RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    HttpClientModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class UserLayoutModule { }
