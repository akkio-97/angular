"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmployeeList = (function () {
    function EmployeeList(empservice) {
        this.empservice = empservice;
    }
    EmployeeList.prototype.ngOnInit = function () {
        var _this = this;
        this.empservice.getAllEmployee().subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) {
            _this.statusmessage = "Problem with service check server";
            // console.error(error);
        });
    };
    EmployeeList.prototype.delete = function (id) {
        var _this = this;
        this.empservice.deleteEmployeeId(id).subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) {
            _this.statusmessage = "Problem with service check server";
            // console.error(error);
        });
    };
    return EmployeeList;
}());
EmployeeList = __decorate([
    core_1.Component({
        selector: '<my-component></my-component>',
        templateUrl: './app.employeecomponent.html',
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeList);
exports.EmployeeList = EmployeeList;
