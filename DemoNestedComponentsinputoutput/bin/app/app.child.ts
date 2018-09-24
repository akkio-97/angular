import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'emp-app',
  templateUrl:'./app.child.html'
})
export class ChildComponent{
    @Input()
    inchild:String;
    @Output()
    notify:EventEmitter<string>=new EventEmitter<string>();
    
    onclick():void{
        this.notify.emit("message from childs");
    }
}