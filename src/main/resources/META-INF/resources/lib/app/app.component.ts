import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { TestService } from './test.service';

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





	public isLoggedIn = false;
  intervalId:any;
  constructor(private _service: AuthService) { }
 
  ngOnInit() {
  //this.isLoggedIn = this._service.checkCredentials(); 
  //this.isLoggedIn = !!this._service.getToken();
  //console.log("App Component ngOnInit"+this.isLoggedIn);
	// let i = window.location.href.indexOf('code');
  //   if(!this.isLoggedIn && i != -1) {
  //     this._service.retrieveToken(window.location.href.substring(i + 5));
  // }
  
  //setInterval(this._service.refreshToken(), 20000);

  }

  login() {
    window.location.href = 
      'http://localhost:8080/o/oauth2/authorize?response_type=code&client_id=id-6da174f2-74fe-7a34-ff46-2aef7504384';
    }
 
  logout() {
    this._service.logout();
  }
}