import { Component, OnInit,OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Signupinterface,UniqueConstraintError,InsertedSuccess } from './signupinterface';
import { SignupserviceService } from './signupservice.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  constructor(private service: SignupserviceService) { }
  a =false;
  b=false;
  c=false;
  d=true;
  title = 'greenvillage';
  signin() {
    // this.d=true;
    this.b=false;
    this.a = true;
  }
  login(){
   // this.d=true;
    this.a=false;
    this.b=true;
  }
  frontend(){
    this.a=false;
    this.b=false;
    this.c=true;
    this.d=false;
  }
  signup: Signupinterface = {  
    name:'',
    email:'',
    password:''
  };
  ngOnInit(): void { }
  Subscription: Subscription = new Subscription();
  SuccessMsg = '';
  ErrorMsg = '';
  Insert(Form:NgForm){
    console.log(Form.value);
    
    this.Subscription = this.service.Insert(Form.value).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.signup.email} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.signup.email} Inserted Succesfully`;
          Form.reset();
        }
       
      }
    }
    )
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
