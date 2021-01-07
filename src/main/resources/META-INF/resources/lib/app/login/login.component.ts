import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
      loginForm: FormGroup;
      errorMessage:any;
    constructor(private authService: AuthService, private formBuilder: FormBuilder,private router: Router) { }
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
        if (this.authService.getToken()) {
          this.isLoggedIn = true;
          //this.authService.refreshToken();
          this.router.navigate(['/productList']);
        }
      }
      get f() { return this.loginForm.controls; }
      onSubmit(){
    
        this.authService.login(this.f.username.value, this.f.password.value)
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            //this.reloadPage();
      }
    
      reloadPage(){
        window.location.reload();
      }
  }