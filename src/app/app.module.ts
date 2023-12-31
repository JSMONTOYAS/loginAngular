import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from './layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/authModule';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    PagesModule, 
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
