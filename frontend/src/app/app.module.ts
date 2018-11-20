import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './nav_components/components.module';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { HttpErrorHandler } from './auth/shared/_services/http-handle-error.service';
import { AppHttpInterceptorService } from './auth/shared/_services/app-http-interceptor.service';
@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      PagenotfoundComponent,
      UserLayoutComponent,
   ],
   imports: [
      CommonModule,
      FormsModule,
      RouterModule.forRoot(routes),
      ReactiveFormsModule,
      HttpModule,
      BrowserAnimationsModule,
      BrowserModule,
      ComponentsModule,
      Ng4LoadingSpinnerModule.forRoot(),
      HttpClientModule,
      ToastrModule.forRoot({
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,

      }),
   ],
   providers: [
    Title,
    HttpErrorHandler,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService ,
      multi: true
    }
  ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
