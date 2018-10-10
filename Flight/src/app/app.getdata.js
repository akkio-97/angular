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
var flight_service_1 = require("./flight.service");
var GetData = (function () {
    function GetData(flightService) {
        this.flightService = flightService;
    }
    GetData.prototype.insert = function () {
        var _this = this;
        this.flight = {
            flightNo: this.flightNo,
            name: this.name,
            flightName: this.flightName,
            source: this.source,
            destination: this.destination,
            price: this.price
        };
        this.flightService.addFlightDetails(this.flight).subscribe(function (check) { return _this.status = check; }, function (error) {
            _this.errormessage = "Can not connect to server";
        });
        console.log(this.status);
    };
    return GetData;
}());
GetData = __decorate([
    core_1.Component({
        selector: '<app-getdata><app-getdata>',
        templateUrl: './app.form.html',
        providers: [flight_service_1.FlightService]
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService])
], GetData);
exports.GetData = GetData;
