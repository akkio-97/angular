"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmployeeService = (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getAllEmployee = function () {
        return [
            { empId: 1001, empName: "Rahul", empSalary: 5000, empDepartment: "JAVA" },
            { empId: 1002, empName: "Vikash", empSalary: 6000, empDepartment: "JAVA" },
            { empId: 1003, empName: "Shital", empSalary: 7000, empDepartment: ".NET" },
            { empId: 1004, empName: "VISHAL", empSalary: 8000, empDepartment: "BI" },
            { empId: 1005, empName: "Amal", empSalary: 9000, empDepartment: "IMS" },
            { empId: 1006, empName: "Vandana", empSalary: 11000, empDepartment: "SAP" },
            { empId: 1007, empName: "Vaishali", empSalary: 9000, empDepartment: "Mainframe" },
        ];
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable()
], EmployeeService);
exports.EmployeeService = EmployeeService;
