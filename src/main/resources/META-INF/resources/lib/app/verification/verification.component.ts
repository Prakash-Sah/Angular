import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestService } from '../test.service';

@Component({
  selector: 'app-verification',
  templateUrl: '/o/Ecommerce/lib/app/verification/verification.component.html',
  styleUrls: ['./o/Ecommerce/lib/app/verification/verification.component.css']
})
export class VerificationComponent {
  constructor(private svc:TestService){
    
	}
	ngOnInit(){
    this.svc.setSteps('3');
    //this.temp =this.svc.getTemp();
    //console.log("In verification"+this.temp);
	}

}