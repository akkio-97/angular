import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms";


@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html'
})
export class AppComponent  {
    
    registerForm = new FormGroup({
        first_name: new FormControl(),
        last_name: new FormControl(),
        phone: new FormControl(),
        email: new FormControl(),
          address: new FormGroup({
            street: new FormControl(),
            zip: new FormControl(),
            city: new FormControl()
          })
        });
    
    onSubmit():void{
        console.log(this.registerForm.value);
    }
       


}
