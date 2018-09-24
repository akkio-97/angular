import {Component} from '@angular/core';

@Component({
    selector:'<my-compo,ent></my-component>',
    templateUrl:'./app.employeecomponent.html',
    
})
export class AppEmployeeComponent{
    data:number=0;

show():void{
  this.data=1; 
}
doget():void{
    this.data=2; 
  }
    
}