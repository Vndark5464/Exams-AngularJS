import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import {FormsModule} from "@angular/forms";

import {HttpClientModule} from "@angular/common/http";

import {RouterModule, Routes} from "@angular/router";

import {ExamangularComponent} from "./ExamAngular/examangular.component";


const appRoutes: Routes = [
  {path: '', component: ExamangularComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    ExamangularComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }