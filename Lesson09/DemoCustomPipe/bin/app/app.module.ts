import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { SearchPipe }  from './filter';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,SearchPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
