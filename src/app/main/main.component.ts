import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { sellplant, Read, InsertedSuccess, UniqueConstraintError } from '../signupinterface';
import { SignupserviceService } from '../signupservice.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    this.Read('');
  }
  constructor(private Service: SignupserviceService) { }
  coursename: String = '';
  GotResult: Boolean = false;
  Results2 = [];
  a = [];

  UpdatedUser: sellplant = {
    p_id: '',
    p_image: '',
    p_name: '',
    p_type: '',
    p_cost: 0,
  };
  Results = [];

  Read1(p_id: String) {
    this.Service.Read1(p_id).subscribe({
      next: (Data: Read) => {
        this.Results2 = Data.Result;
        for (let i = 0; i < this.Results2.length; i++) {
          this.a = this.Results2[i];
        }
        console.log(this.a);
        this.UpdatedUser = {
          p_id: this.a[0],
          p_image: this.a[1],
          p_name: this.a[2],
          p_type: this.a[3],
          p_cost: this.a[4]
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err: any) => {
        console.log(Err);
      },
    });
  }
  Read(p_id: String) {
    this.Service.Read1(p_id).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
        console.log(this.Results);
        
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }

  Update(p_id: String, Details: sellplant) {
    this.Service.Update(p_id, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
