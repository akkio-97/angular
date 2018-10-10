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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var FlightService = (function () {
    function FlightService(http) {
        this.http = http;
    }
    FlightService.prototype.getFlightDetails = function () {
        return this.http.get('http://localhost:8081/Flight/rest/get')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FlightService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    FlightService.prototype.addFlightDetails = function (flight) {
        var cpHeaders = new http_1.Headers({ 'Content-type': 'application/json' });
        var option = new http_1.RequestOptions({ headers: cpHeaders });
        return this.http.post('http://localhost:8081/Flight/rest/create', flight, option)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    return FlightService;
}());
FlightService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FlightService);
exports.FlightService = FlightService;
