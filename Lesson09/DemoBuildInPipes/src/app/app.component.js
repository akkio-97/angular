"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.employess = [
            { empId: 1001, empName: 'Rahul', empSal: 9000, empDep: 'JAVA', empjoiningdate: '6/12/2014' },
            { empId: 1002, empName: 'Vikash', empSal: 11000, empDep: 'ORAAPS', empjoiningdate: '6/12/2017' },
            { empId: 1003, empName: 'Uma', empSal: 12000, empDep: 'JAVA', empjoiningdate: '6/12/2010' },
            { empId: 1004, empName: 'Sachin', empSal: 11500, empDep: 'ORAAPS', empjoiningdate: '11/12/2017' },
            { empId: 1005, empName: 'Amol', empSal: 7000, empDep: '.NET', empjoiningdate: '1/1/2018' },
            { empId: 1006, empName: 'Vishal', empSal: 17000, empDep: 'BI', empjoiningdate: '9/12/2012' },
            { empId: 1007, empName: 'Rajita', empSal: 21000, empDep: 'BI', empjoiningdate: '6/7/2014' },
            { empId: 1008, empName: 'Neelima', empSal: 81000, empDep: 'TESTING', empjoiningdate: '6/17/2015' },
            { empId: 1009, empName: 'Daya', empSal: 1000, empDep: 'TESTING', empjoiningdate: '6/17/2016' },
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
