import {  Pipe, PipeTransform }      from '@angular/core';
import { Employee } from "./app.employee";

@Pipe({
  name: 'searchPipe'
  
})
export class SearchPipe implements PipeTransform {
    transform(employess:any, search:any): any {
           if(search==undefined) return employess;
           return employess.filter(function(employes:any){
               console.log(employes);
               return employes.empName.toLowerCase().includes(search.toLowerCase());
           })
        }
  
  }
