import {Component, OnInit} from '@angular/core';
import {Employee} from './app.employee';
import { ActivatedRoute,Router, Params } from '@angular/router';
@Component({
    
    template:'<h1>In search{{empCode}}</h1>'
})
export class EmployeeSearchComponent implements OnInit{
    
    empCode:string;
//getting data from URL
    ngOnInit(): void {
        this.empCode=this._activate.snapshot.params['id'];
    }
   constructor(private _activate:ActivatedRoute) {
	
}
    
    
}