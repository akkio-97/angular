import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from "./app.flight";

@Pipe( {
    name: 'searchPipe'

} )
export class SearchPipe implements PipeTransform {
    transform( flights: any, search: any, column: string ): any {
        if ( search == undefined ) return flights;



        return flights.filter( function( flight: any ) {
            if ( column == "flightNo" ) {
                return flight.flightNo.toString().includes( search.toString() );
            }
            else if ( column == "name" ) {
                return flight.name.toLowerCase().includes( search.toLowerCase() );
            }
            else if ( column == "flightName" ) {
                return flight.flightName.toLowerCase().includes( search.toLowerCase() );
            }
            else if ( column == "source" ) {
                return flight.source.toLowerCase().includes( search.toLowerCase() );
            }
            else if ( column == "destination" ) {
                return flight.destination.toLowerCase().includes( search.toLowerCase() );
            }
            else if ( column == "price" ) {
                return flight.price.toString().includes( search.toString() );
            }
        } )
    }

}



