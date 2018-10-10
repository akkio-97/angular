import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Component, NgModule } from '@angular/core';
import { Display } from "./app.display";
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GetData } from "./app.getdata";
import {HttpModule} from '@angular/http';
import { SearchPipe } from "./filter";
import { SortPipe } from "./sortfilter";



const appRoutes: Routes=[
                         
                         { path: 'getdata',  component: GetData},
                         { path: 'display',  component: Display},
                        
                        
                          ];


@NgModule({
  imports:      [ BrowserModule,FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,SearchPipe,SortPipe, GetData, Display],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
