import { Component,OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { nonfliplantsnterface,Infointerface } from '../signupinterface';
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
  a1:any[]=[];
  show=false;
 a=[];
 canshow=true;
  flower:nonfliplantsnterface={
    p_id:'',
    p_image:'',
    p_name:'',
    p_type:'',
    p_cost:0
  }
  info: Infointerface = {
    plant_name: '',
    soil_type:'',
    ph_range:'',
    sunlight:'',
    watering:'',
    fertilizer:'',
    height:'',
    oxygen_level:'',
    img_url:''
  };
  Read(){
    this.Subscription=this.service.Read2('flower').subscribe(
      (Data:any)=>{
        if(Data){
          console.log(Data);
          this.a1= Data.Result;
          this.show=true;
          this.canshow=false;
        }
        else{
          console.log("error");
        }
    }
    )
  }
  Read1(a:string) { 
    this.Subscription = this.service.Read3(a).subscribe(
      (data:any)=>{
        if(data){
          
          console.log(data);
          console.log(data.Result);
          this.a=data.Result[0];
          console.log(this.a);
          // this.canShowData=true;
          this.info = {
            
            soil_type:this.a[0],
            ph_range:this.a[1],
            sunlight:this.a[2],
            watering:this.a[3],
            fertilizer:this.a[4],
            height:this.a[5],
            plant_name: this.a[6],
            oxygen_level:this.a[7],
            img_url:this.a[8]
          }
        }
        else{
          console.log("Failed");
        }
      }
    )
  }
  back(){
    this.canshow=true;
    this.show=false;
  }
  OnDestroy(): void {
    this.Subscription.unsubscribe();
  }

}
