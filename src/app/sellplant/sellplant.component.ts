import { Component, OnDestroy, OnInit } from '@angular/core';
import { SignupserviceService } from '../signupservice.service';
import { Subscription } from 'rxjs';
import { sellplant, InsertedSuccess, plantDetailsInterface, UniqueConstraintError } from '../signupinterface';
import { NgForm } from '@angular/forms';

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
  // canShowData=false;
  SuccessMsg = '';
  ErrorMsg = '';
  Insert(Form: NgForm) {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    this.Subscription = this.Service.Insert1(Form.value).subscribe(
      (data) => {
        if (data) {
          alert("success");
          console.log(data);
        }
        else {
          console.log("Failed");
        }
        // Form.reset();
      }
    )
  }

  info1: plantDetailsInterface = {
    plant_name: '',
    soil_type: '',
    ph_range: '',
    sunlight: '',
    watering: '',
    fertilizer: '',
    height: '',
    oxygen_level: '',
    img_url: '',
  };


  Insert1(Form: NgForm) {
    console.log(Form.value);
    this.Subscription = this.Service.Insert3(Form.value).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.info1.plant_name} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.info1.plant_name} Inserted Succesfully`;
          Form.reset();
        }

      }
    }
    )
  }
}
  // a = [];
  // Read() {
  //   this.Subscription = this.Service.Read1(this.info.p_id).subscribe(
  //     (data: any) => {
  //       if (data) {

  //         console.log(data);
  //         console.log(data.Result);
  //         this.a = data.Result[0];
  //         console.log(this.a);
  //         // this.canShowData=true;
  //         this.info = {
  //           p_id: this.a[0],
  //           p_image: this.a[1],
  //           p_name: this.a[2],
  //           p_type: this.a[3],
  //           p_cost: this.a[4],
  //         }
  //         this.canShowData = true;
  //       }
  //       else {
  //         console.log("Failed");
  //       }
  //     }
  //   )
  // }
  // Update() {
  //   alert("updated success")
  //   this.Subscription = this.Service.Update(this.info.p_id, this.info).subscribe(
  //     (data: any) => {
  //       if (data) {
  //         console.log(data);
  //         this.SuccessMsg = data.Message;
  //         alert("update success")
  //       }
  //       else {
  //         console.log("Failed");
  //       }
  //     }
  //   )
  // }
  // Delete() {
  //   this.ErrorMsg = '';
  //   this.SuccessMsg = '';

  //   this.Subscription = this.Service.Delete(this.info.p_id).subscribe(
  //     (data: any) => {
  //       if (data) {
  //         console.log(data);
  //       alert("deleted")
  //         this.SuccessMsg = data.Message;
  //       }
  //       else {
  //         console.log("Failed");
  //       }
  //     }
  //   )
  // }
