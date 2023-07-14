import { Component,OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { nonfliplantsnterface } from '../signupinterface';
import { SignupserviceService } from '../signupservice.service';
@Component({
  selector: 'app-nonflplants',
  templateUrl: './nonflplants.component.html',
  styleUrls: ['./nonflplants.component.css']
})
export class NonflplantsComponent implements OnInit{
  ngOnInit(): void {}
  constructor(private service:SignupserviceService){}
  Subscription:Subscription=new Subscription();
  a:any[]=[];
  show=true;
  seasons:string='summer';
  flower:nonfliplantsnterface={
    id:0,
    url:'',
    names:'',
    season:'',
  }
  url="https://www.thespruce.com/thmb/0QHDmutjh9OcQ-V4sHuUjRhPWo0=/6720x0/filters:no_upscale():max_bytes(150000):strip_icc()/tiny-flowers-1315816-02-ffd9607c255d482cb14838988fb5093f.jpg";
  Read(){
    this.Subscription=this.service.Read2(this.seasons).subscribe(
      (Data:any)=>{
        if(Data){
          console.log(Data);
          this.a = Data.Result;
          this.show=true;
        }
        else{
          console.log("error");
          
        }
    }
    )
  }
  OnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}
