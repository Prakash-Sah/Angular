import { Component } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-booking',
  templateUrl: '/o/Ecommerce/lib/app/booking/booking.component.html',
  styleUrls: ['./o/Ecommerce/lib/app/booking/booking.component.css']
})
export class BookingComponent {

  constructor(private svc:TestService){
	}
	ngOnInit(){
		this.svc.setSteps('5');
	}

}