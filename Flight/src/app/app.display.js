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
var filter_1 = require("./filter");
var Display = (function () {
    function Display(flightService, pipe) {
        this.flightService = flightService;
        this.pipe = pipe;
        this.column = "name";
        this.temp = 1;
        this.path = ['flightNo'];
        this.order = 1; // 1 asc, -1 desc;
    }
    Display.prototype.ngOnInit = function () {
        var _this = this;
        console.log("called");
        this.flightService.getFlightDetails().subscribe(function (flightData) { return _this.flight = flightData; }, function (error) {
            _this.statusmessage = "Problem with Server";
        });
    };
    Display.prototype.sortTable = function (prop) {
        this.path = prop.split('.');
        this.order = this.order * (-1); // change order
        return false; // do not reload
    };
    Display.prototype.search = function (column) {
        this.column = column;
        if (this.column == "flightNo") {
            this.find = this.flightNo;
        }
        else if (this.column == "name") {
            this.find = this.name;
        }
        else if (this.column == "flightName") {
            this.find = this.flightName;
        }
        else if (this.column == "source") {
            this.find = this.source;
        }
        else if (this.column == "destination") {
            this.find = this.destination;
        }
        else {
            this.find = this.price;
        }
    };
    Display.prototype.action = function (search, column) {
        this.flight = this.pipe.transform(this.flight, search, column);
        console.log(this.flight);
    };
    return Display;
}());
Display = __decorate([
    core_1.Component({
        selector: '<app-display><app-display>',
        templateUrl: './app.display.html',
        providers: [flight_service_1.FlightService, filter_1.SearchPipe]
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService, filter_1.SearchPipe])
], Display);
exports.Display = Display;
