import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppEmployeeComponent }  from './app.employeecomponent';
import { HomeComponent }  from './app.HomeComponent';
import { EmployeeSearchComponent }  from './app.employeseearchcomponent';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes=[
                     { path: '',  redirectTo:'/getdata',pathMatch: 'full'},
                     { path: 'getdata',  component: AppEmployeeComponent},
                     { path: 'postdata',  component: HomeComponent },
                     {path:'search/:id',component:EmployeeSearchComponent}
                      ];
@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,AppEmployeeComponent,HomeComponent,EmployeeSearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
