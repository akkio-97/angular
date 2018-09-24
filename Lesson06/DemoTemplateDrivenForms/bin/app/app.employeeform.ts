import { Component } from '@angular/core';
import { NgForm } from "@angular/Forms/forms";
import { Department } from "./Department";
import { Employee} from "./app.employee";

@Component({
  selector: 'emp-app',
  templateUrl:'./app.employee.html'
})
export class EmployeeComponent {
    emp:Employee={
     eId:null,
    eName:null,
    eSalary:null,
    eType:null,
    eDepartment:null,
    eskill:null
    
    };
    
   departments:Department[]=[
        {dId:1,dName:"Java"},                    
        {dId:2,dName:".Net"}, 
        {dId:3,dName:"Mainframe"}, 
        {dId:4,dName:"BI"}
                             ];
   
    
    getData(empForm:NgForm):void{
        console.log(empForm.value);
       
        //console.log(this.empskilln);
        //this.emp.eSkills=empForm.controls['gender'].value;
        //console.log(this.emp.eSkills);
    }
            }