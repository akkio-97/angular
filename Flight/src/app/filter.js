"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (flights, search, column) {
        if (search == undefined)
            return flights;
        return flights.filter(function (flight) {
            if (column == "flightNo") {
                return flight.flightNo.toString().includes(search.toString());
            }
            else if (column == "name") {
                return flight.name.toLowerCase().includes(search.toLowerCase());
            }
            else if (column == "flightName") {
                return flight.flightName.toLowerCase().includes(search.toLowerCase());
            }
            else if (column == "source") {
                return flight.source.toLowerCase().includes(search.toLowerCase());
            }
            else if (column == "destination") {
                return flight.destination.toLowerCase().includes(search.toLowerCase());
            }
            else if (column == "price") {
                return flight.price.toString().includes(search.toString());
            }
        });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    core_1.Pipe({
        name: 'searchPipe'
    })
], SearchPipe);
exports.SearchPipe = SearchPipe;
