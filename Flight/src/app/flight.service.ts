import { Injectable }      from '@angular/core';
import {Http,Response,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
import { Flight } from "./app.flight";


@Injectable()
export class FlightService {
    
     constructor(private http : Http) {
	
}
    
    getFlightDetails():Observable<Flight[]>
    {
        return this.http.get('http://localhost:8081/Flight/rest/get')
        .map((response:Response)=><Flight[]>response.json())
        .catch(this.handleError);
    }
    handleError(error: Response){
        console.error(error);
        return Observable.throw(error);
    }
    
    
    addFlightDetails(flight:Flight):Observable<number>
    {
        let cpHeaders = new Headers({'Content-type':'application/json'});
        let option = new RequestOptions({ headers : cpHeaders})
        return this.http.post('http://localhost:8081/Flight/rest/create', flight, option)
        .map((response:Response)=><number>response.json())
        .catch(this.handleError);
    }
   
}