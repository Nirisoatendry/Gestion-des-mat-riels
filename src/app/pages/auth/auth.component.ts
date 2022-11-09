import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  hide = true
  loginForm !: FormGroup
  constructor( ) {

  }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('', [Validators.required,Validators.minLength(6)])
      }
    );
  }
onLogin(){
  console.log(this.loginForm.get('email'));
  console.log(this.loginForm.get('email'));
}
}
