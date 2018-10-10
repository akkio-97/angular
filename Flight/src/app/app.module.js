"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var core_1 = require("@angular/core");
var app_display_1 = require("./app.display");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_getdata_1 = require("./app.getdata");
var http_1 = require("@angular/http");
var filter_1 = require("./filter");
var sortfilter_1 = require("./sortfilter");
var appRoutes = [
    { path: 'getdata', component: app_getdata_1.GetData },
    { path: 'display', component: app_display_1.Display },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, filter_1.SearchPipe, sortfilter_1.SortPipe, app_getdata_1.GetData, app_display_1.Display],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
