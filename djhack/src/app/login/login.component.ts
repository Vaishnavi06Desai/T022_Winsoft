import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: boolean = false;
  milid: boolean = false;
  password: boolean = false;
  errormessage: string;

  constructor() { }

  form = new FormGroup({
    MilitaryID: new FormControl(''),
    Password: new FormControl('')
   })

  ngOnInit(): void {
  }

  validate(){
    var flag = true;

    if (this.form.get("MilitaryID").value == "" || !(/^[A-Za-z]+$/.test(this.form.get("MilitaryID").value)))                                  
    { 
        this.milid = true;
        flag = false; 
    }

    if (flag == true) {
      this.submit();
     }
  }

  submit(){

  }

}
