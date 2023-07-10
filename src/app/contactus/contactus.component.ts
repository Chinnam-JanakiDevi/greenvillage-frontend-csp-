import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { interface1 ,InsertedSuccess,UniqueConstraintError} from '../signupinterface';
import { SignupserviceService } from '../signupservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  constructor(private Service:SignupserviceService) {}

  Subscription:Subscription=new Subscription();
   User:interface1 ={
    name:'',
    email_address:'',
    phone:0,
    message:''
   };
   SuccessMsg='';
   ErrorMsg='';
  
   Insert(form:NgForm){
    this.ErrorMsg='';
    this.SuccessMsg='';

       this.Subscription = this.Service.Insert2(form.value).subscribe(
        (data:any)=>{
          if(data){
            console.log(data);
            // document.write("inserted succesfully");
            this.SuccessMsg="Inserted Succesfully"

          }
          else{
            console.log("Failed");
            alert("Unique constraint error");
            this.ErrorMsg="User Already Exists"
          }
        }
        
      )
      form.reset();
    }
}

