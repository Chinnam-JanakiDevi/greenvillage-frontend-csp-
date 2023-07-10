import { Component,OnDestroy,OnInit } from '@angular/core';
import { SignupserviceService } from '../signupservice.service';
import { Subscription } from 'rxjs';
import { Signupinterface ,sellplant,InsertedSuccess} from '../signupinterface';

@Component({
  selector: 'app-sellplant',
  templateUrl: './sellplant.component.html',
  styleUrls: ['./sellplant.component.css']
})
export class SellplantComponent implements OnInit {
  constructor(private Service: SignupserviceService) { }
  ngOnInit() { }
  Subscription: Subscription = new Subscription();
  User: sellplant = {
    p_id: '',
    p_image: '',
    p_name: '',
    p_type: '',
    p_cost: 0,
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    this.Subscription = this.Service.Insert1(this.User).subscribe(
      (data) => {
        if (data) {
          console.log(data);  
          
        }
        else {
          console.log("Failed");
        }
      }
    )
  }
}
