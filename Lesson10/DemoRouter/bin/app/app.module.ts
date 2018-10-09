import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppEmployeeComponent }  from './app.employeecomponent';
import { HomeComponent }  from './app.HomeComponent';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes=[
                     { path: '',  redirectTo:'/getdata',pathMatch: 'full'},
                     { path: 'getdata',  component: AppEmployeeComponent},
                     { path: 'postdata',  component: HomeComponent }
                    
                      ];
@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,AppEmployeeComponent,HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
