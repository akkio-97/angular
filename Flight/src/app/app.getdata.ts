import { Component } from '@angular/core';
import { Flight } from "./app.flight";
import { FlightService } from "./flight.service";


@Component({
  selector: '<app-getdata><app-getdata>',
  templateUrl:'./app.form.html',
  providers : [FlightService]
  
})

export class GetData {
    
    errormessage: string;
    
    
    flight:Flight;
    flightNo : number;
    name : String;
    flightName : String;
    source : String;
    destination : String;
    price : number;
    status : number;
    
constructor(private flightService : FlightService) {
	
}

    insert()
    {
        
        this.flight={
            

            flightNo : this.flightNo,
            name : this.name,
            flightName :this.flightName,
            source : this.source,
            destination : this.destination,
            price : this.price
        };
        
        
        this.flightService.addFlightDetails(this.flight).subscribe((check)=>this.status=check,
                (error)=>{
                    this.errormessage = "Can not connect to server";            
                });
        
        console.log(this.status);
        
    }
    
}