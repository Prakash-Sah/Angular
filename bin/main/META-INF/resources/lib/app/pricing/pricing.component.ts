import { CartService } from '../cart.service';
import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-pricing',
  templateUrl: '/o/Ecommerce/lib/app/pricing/pricing.component.html',
  styleUrls: ['./o/Ecommerce/lib/app/pricing/pricing.component.css']
})
export class PricingComponent {
  price:any;
  map = new Map();
  quantity:number=1;
  prices: any;
  isShow:boolean=false;
  constructor(private svc:TestService,private cs:CartService){
    this.map =this.svc.getValue();
    this.price = this.svc.getPrice()*this.quantity;
  }
  update(x:any)
  {
    console.log("value of x"+x);
    if(x =="")
    {
      this.isShow=false;
    }
    else if(x=="0"||x=="1")
    {
      this.isShow=false;
      alert("Enter valid quantity");
    }
    else{
    this.isShow=true;
    this.quantity= x;
    this.prices = this.svc.getPrice()*x;
    }
  }
  
  
	ngOnInit(){
		this.svc.setSteps('4');
	}

}