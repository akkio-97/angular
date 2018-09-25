import { Injectable }      from '@angular/core';
import {Employee} from './employee';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
//import "rxjs/add/operator/throw"
@Injectable()
export class EmployeeService{
   
    constructor(private http:Http) {
	
}
    
    getAllEmployee():Observable<Employee[]> 
{ return  this.http.get("http://localhost:9090/SpringWithAngular/rest/employee").
        map((response:Response)=><Employee[]>response.json())
        .catch(this.handleError);
    }
    handleError(error: Response){
        console.error(error);
        return Observable.throw(error);
    }
    
    
    
    deleteEmployeeId(data:number): Observable<Employee[]> {
        console.log(data)
        return this.http
            .delete('http://localhost:9090/SpringWithAngular/rest/employee/delete/'+data)
            .map((response:Response)=><Employee[]>response.json())
            .catch(this.handleError);
        }
        handleErrorDelete(error: Response){
            console.error(error);
            return Observable.throw(error);
        }
        /*addEmployee(data:any): Observable<Employee[]> {
            let empData=JSON.stringify(data);
            return this.http
                .post('http://localhost:9090/SpringWithAngular/rest/employee/create/',empData)
                .map((response:Response)=><Employee[]>response.json())
                .catch(this.handleError);
            }
            handleErrorAdd(error: Response){
                console.error(error);
                return Observable.throw(error);
            }*/
    }
