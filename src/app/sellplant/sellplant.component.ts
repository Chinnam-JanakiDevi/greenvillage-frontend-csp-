import { Component, OnDestroy, OnInit } from '@angular/core';
import { SignupserviceService } from '../signupservice.service';
import { Subscription } from 'rxjs';
import { Signupinterface, sellplant, InsertedSuccess } from '../signupinterface';

@Component({
  selector: 'app-sellplant',
  templateUrl: './sellplant.component.html',
  styleUrls: ['./sellplant.component.css']
})
export class SellplantComponent implements OnInit {
  constructor(private Service: SignupserviceService) { }
  ngOnInit() { }
  Subscription: Subscription = new Subscription();
  info: sellplant = {
    p_id: '',
    p_image: '',
    p_name: '',
    p_type: '',
    p_cost: 0,
  };
  canShowData=false;
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    this.Subscription = this.Service.Insert1(this.info).subscribe(
      (data) => {
        if (data) {
          alert("success")
          console.log(data);
        }
        else {
          console.log("Failed");
        }
      }
    )
  }
  a = [];
  Read() {
    this.Subscription = this.Service.Read1(this.info.p_id).subscribe(
      (data: any) => {
        if (data) {

          console.log(data);
          console.log(data.Result);
          this.a = data.Result[0];
          console.log(this.a);
          // this.canShowData=true;
          this.info = {
            p_id: this.a[0],
            p_image: this.a[1],
            p_name: this.a[2],
            p_type: this.a[3],
            p_cost: this.a[4],
          }
          this.canShowData = true;
        }
        else {
          console.log("Failed");
        }
      }
    )
  }
  Update() {
    alert("updated success")
    this.Subscription = this.Service.Update(this.info.p_id, this.info).subscribe(
      (data: any) => {
        if (data) {
          console.log(data);
          this.SuccessMsg = data.Message;
          alert("update success")
        }
        else {
          console.log("Failed");
        }
      }
    )
  }
  Delete() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    this.Subscription = this.Service.Delete(this.info.p_id).subscribe(
      (data: any) => {
        if (data) {
          console.log(data);
        alert("deleted")
          this.SuccessMsg = data.Message;
        }
        else {
          console.log("Failed");
        }
      }
    )
  }
}
