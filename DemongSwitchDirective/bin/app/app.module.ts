import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppEmployeeComponent }  from './app.employeecomponent';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,AppEmployeeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
