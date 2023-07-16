import { Component } from '@angular/core';
import { SignupserviceService } from '../signupservice.service';
import { Subscription } from 'rxjs';
import { Infointerface } from '../signupinterface';
@Component({
  selector: 'app-flplants',
  templateUrl: './flplants.component.html',
  styleUrls: ['./flplants.component.css']
})
export class FlplantsComponent {
  constructor(private service: SignupserviceService) { }
  canShowData:boolean=false;
  ngOnInit(): void { }
  Subscription: Subscription = new Subscription();
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
  a=[];
  Read(a:string) { 
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
            this.canShowData=true;
          }
          else{
            console.log("Failed");
          }
        }
      )
    }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}