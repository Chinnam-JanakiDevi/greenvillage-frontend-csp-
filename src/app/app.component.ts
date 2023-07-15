import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Signupinterface, UniqueConstraintError, InsertedSuccess, Read, logins } from './signupinterface';
import { SignupserviceService } from './signupservice.service';
import { Subscription } from 'rxjs';
import { Logininterface } from './logininterface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private service: SignupserviceService,private Router:Router) { }
  a = false; //login page
  b = false;//registration page
  c = false;//green village frontend
  d = false; // starting page nav bar
  e = true;//nec logo
  error = false;//login form invalid credentials

  title = 'greenvillage';

  signin() {
    // this.d=true;
    this.b = false;
    this.e = false;
    this.a = true;
    this.d=true;
  }
  login() {
    // this.d=true;
    this.a = false;
    this.e = false;
    this.b = true;
    this.d=true

  }
  logout() {
    this.a = false;
    this.b = false;
    this.e = true;
    this.c = false;
    this.d = false;
  }
  signup: Signupinterface = {
    name: '',
    email: '',
    password: ''
  };
  loginform: Logininterface = {
    email: '',
    password: '',
    name:'',
  }

  readarray = [];
  ngOnInit(): void { }
  Subscription: Subscription = new Subscription();
  SuccessMsg = '';
  ErrorMsg = '';

  Insert(Form: NgForm) {
    console.log(Form.value);

    this.Subscription = this.service.Insert(Form.value).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.signup.email} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.signup.email} Inserted Succesfully`;
          this.a=true;
          this.b=false
        }
        Form.reset();
        
      }
    }
    )
  }
  Read() {
    this.Subscription = this.service.Read(this.loginform.email).subscribe(
      (data: any) => {
        this.readarray = data.Result[0];
        console.log(this.readarray);
        if (data.Result[0]) {
          if (this.readarray[2] == this.loginform.password) {
            this.a = false;
            this.b = false;
            this.e = false;
            this.c = true;
            this.d = false;
           this. Router.navigate(['/home']);
          }
          else {
            this.error = true;
          }
        }
        else {
          this.error = true;

        }
      })
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
