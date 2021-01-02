import { Component } from '@angular/core';

export class Hero {
	id: any;
	name: any;
}

@Component({
	selector:'app-root',
	templateUrl: '/o/Ecommerce/lib/app/app.component.html',
  styleUrls: ['./o/Ecommerce/lib/app/app.component.css']
})
export class AppComponent {
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
	title = 'Tour of Heroes';
}