import { TestService } from '../test.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: '/o/Ecommerce/lib/app/information/information.component.html',
  styleUrls: ['./o/Ecommerce/lib/app/information/information.component.css']
})
export class InformationComponent implements OnInit{

    
    personalDetails = new FormGroup({
    fullName: new FormControl('',Validators.required),
    emailId: new FormControl('',[Validators.required, Validators.email]),
     mobileNumber: new FormControl('', Validators.required),
      state: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      zip: new FormControl('',Validators.required)
  });
  //price:any;
  //map = new Map();
  constructor(private svc:TestService){
    //this.map =this.svc.getValue();
    //this.price = this.svc.getPrice();
	}
	ngOnInit(){
    this.svc.setSteps('2');
  }
 
  
}

