import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { EmployeeList }  from './app.employeelist';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,EmployeeList],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
