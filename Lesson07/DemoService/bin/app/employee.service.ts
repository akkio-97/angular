import { Injectable }      from '@angular/core';
import {IEmployee} from './employee';
@Injectable()
export class EmployeeService{
    getAllEmployee():IEmployee[] 
{ return  [
           { empId: 1001, empName: "Rahul", empSalary: 5000, empDepartment: "JAVA" },
           { empId: 1002, empName: "Vikash", empSalary: 6000, empDepartment: "JAVA" },
           { empId: 1003, empName: "Shital", empSalary: 7000, empDepartment: ".NET" },
           { empId: 1004, empName: "VISHAL", empSalary: 8000, empDepartment: "BI" },
           { empId: 1005, empName: "Amal", empSalary: 9000, empDepartment: "IMS" },
           { empId: 1006, empName: "Vandana", empSalary: 11000, empDepartment: "SAP" },
           { empId: 1007, empName: "Vaishali", empSalary: 9000, empDepartment: "Mainframe" },
       ];
    }
}