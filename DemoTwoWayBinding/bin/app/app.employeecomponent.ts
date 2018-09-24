import {Component} from '@angular/core';

@Component({
    selector:'<my-component></my-component>',
    templateUrl:'./app.employeecomponent.html',
    
})
export class AppEmployeeComponent{
    empId:number=1001;
    empName:string="Rahul";
    empSalary:number=5000;
}