import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { countries } from '../mock-interface';
import { COUNTRIES } from '../mock-data';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  
  countries:countries[] = COUNTRIES

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(15)
    ]),
    country: new FormControl('',Validators.required ),
    phoneNumber: new FormControl('',[
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
   });
    constructor() { }
  
    onReset() {
      this.form.reset();
    }

    ngOnInit() {
    }
  
    onSubmit(){
      alert(JSON.stringify(this.form.value));
    }

}