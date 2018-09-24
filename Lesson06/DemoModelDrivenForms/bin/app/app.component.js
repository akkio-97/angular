"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent() {
        this.registerForm = new forms_1.FormGroup({
            first_name: new forms_1.FormControl(),
            last_name: new forms_1.FormControl(),
            phone: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
            address: new forms_1.FormGroup({
                street: new forms_1.FormControl(),
                zip: new forms_1.FormControl(),
                city: new forms_1.FormControl()
            })
        });
    }
    AppComponent.prototype.onSubmit = function () {
        console.log(this.registerForm.value);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
