import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
    selector: 'app-login',
    templateUrl: '/o/Ecommerce/lib/app/login/login.component.html',
    styleUrls: ['./o/Ecommerce/lib/app/login/login.component.css']
  })
  export class LoginComponent implements OnInit
  {
      isLoggedIn =false;
      isLoginFailed=false;
      form:any;
      errorMessage:any;
    constructor(private authService: AuthService,private router: Router) { }
    ngOnInit() {
        if (this.authService.getToken()) {
          this.isLoggedIn = true;
          this.router.navigate(['/productList']);
        }
      }
      onSubmit(){
        const { username, password } = this.form;
    
        this.authService.login(username, password)
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.reloadPage();
      }
    
      reloadPage(){
        window.location.reload();
      }
  }