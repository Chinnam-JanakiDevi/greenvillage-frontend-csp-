import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  Insert(Form:NgForm){

  }
}
