import { Component, OnInit } from '@angular/core';
import { FlightService } from "./flight.service";
import { Flight } from "./app.flight";
import { SearchPipe } from "./filter";


@Component( {
    selector: '<app-display><app-display>',
    templateUrl: './app.display.html',
    providers: [FlightService, SearchPipe]

} )

export class Display implements OnInit {

    statusmessage: string;
    flight: Flight[];

    column: string = "name";
    find: any;


    flightNo: number;
    name: String;
    flightName: String;
    source: String;
    destination: String;
    price: number;
   temp:number=1;

    constructor( private flightService: FlightService, private pipe : SearchPipe ) {

    }

    ngOnInit(): void {

        console.log( "called" );

        this.flightService.getFlightDetails().subscribe(( flightData ) => this.flight = flightData,
            ( error ) => {
                this.statusmessage = "Problem with Server"
            } );



    }

    flights: Flight[];
    path: string[] = ['flightNo'];
    order: number = 1; // 1 asc, -1 desc;

    sortTable( prop: string ) {
        this.path = prop.split( '.' )
        this.order = this.order * ( -1 ); // change order
        return false; // do not reload
    }


    search( column: string ) {
        this.column = column;

        if ( this.column == "flightNo" ) {
            this.find = this.flightNo;
        }
        else if ( this.column == "name" ) {
            this.find = this.name;
        }
        else if ( this.column == "flightName" ) {
            this.find = this.flightName;
        }
        else if ( this.column == "source" ) {
            this.find = this.source;
        }
        else if ( this.column == "destination" ) {
            this.find = this.destination;
        }
        else{
            this.find = this.price;
        }


    }
    
    action(search:string, column:string)
    {
        this.flight = this.pipe.transform(this.flight,search,column);
        console.log(this.flight);
    }


}