import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import { message } from 'src/app/core/models/response';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  hide = true;
  loginForm!: FormGroup;
  resp : message = {
    statut:false
  }; 
  constructor(private _api : ApiService,private _route : Router) {
    this._api.getAllMateriels().subscribe(data=>console.log(data));
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  onLogin() {
    this.resp = {statut:true};
    this._api.auth(this.loginForm.value).subscribe(response=>{
     if(response.statut){
      this._route.navigate(['pages'])
      this.resp = response;
     }else{
      console.log(response)
      this.resp = response;
     }
    });
  }
}
