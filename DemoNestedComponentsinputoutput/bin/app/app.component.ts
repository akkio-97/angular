import { Component } from '@angular/core';
import { Employee } from './app.employee';
@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html'
})
export class AppComponent {
    color: string;
message:string="test";
            emp:Employee={empId:1001,empName:'Abcd'};
onNotifyclick(mes:string):void{
    this.message=mes;
}


 }
