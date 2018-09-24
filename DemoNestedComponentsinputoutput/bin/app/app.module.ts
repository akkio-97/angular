import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ChildComponent }  from './app.child';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,ChildComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
