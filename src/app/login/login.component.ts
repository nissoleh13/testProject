import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }
  signIn(){
    if(this.loginForm.value.login !== '' && this.loginForm.value.password !== ''){
      console.log(this.loginForm.value);
    }else{
      console.log('Input all fields!');
    }
  }
}
