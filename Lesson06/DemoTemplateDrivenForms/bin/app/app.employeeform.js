"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmployeeComponent = (function () {
    function EmployeeComponent() {
        this.emp = {
            eId: null,
            eName: null,
            eSalary: null,
            eType: null,
            eDepartment: null,
            eskill: null
        };
        this.departments = [
            { dId: 1, dName: "Java" },
            { dId: 2, dName: ".Net" },
            { dId: 3, dName: "Mainframe" },
            { dId: 4, dName: "BI" }
        ];
    }
    EmployeeComponent.prototype.getData = function (empForm) {
        console.log(empForm.value);
        //console.log(this.empskilln);
        //this.emp.eSkills=empForm.controls['gender'].value;
        //console.log(this.emp.eSkills);
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'emp-app',
        templateUrl: './app.employee.html'
    })
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
