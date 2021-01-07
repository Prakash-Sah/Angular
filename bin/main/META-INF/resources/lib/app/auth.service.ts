import { HttpClient, HttpHeaders } from "@angular/common/http";
 import { Injectable } from "@angular/core";

 @Injectable()
export class AuthService{


    public clientId = 'id-6da174f2-74fe-7a34-ff46-2aef7504384';
    public clientSecret = 'secret-1497b954-9adc-9a7a-53c1-3bbb5527118b';
  public redirectUri = 'http://localhost:8080';
  
  constructor(private _http: HttpClient) { }

  retrieveToken(code:any) {
      console.log("authorized code"+code);
    let params = new URLSearchParams();   
    params.append('grant_type','authorization_code');
    params.append('client_id', this.clientId);
    params.append('client_secret', this.clientSecret);
    params.append('redirect_uri', this.redirectUri);
    params.append('code',code);

    let headers = 
      new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});
       
      this._http.post('http://localhost:8080/o/oauth2/token', 
        params.toString(), { headers: headers })
        .subscribe(
          data => this.saveToken(data),
          err => alert('Invalid Credentials')); 
  }

  saveToken(token:any) {
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    //Cookie.set("access_token", token.access_token, expireDate);
    window.sessionStorage.setItem('access_token', token.access_token);
    console.log('Obtained Access token'+token.access_token);
    window.location.href = 'http://localhost:8080';
  }

 

  checkCredentials() {
    //return Cookie.check('access_token');
  } 
  public getToken(){
    return window.sessionStorage.getItem('access_token');
  }
  login(email:any,password:any)
  {
    let params = new URLSearchParams();   
    params.append('grant_type','password');
    params.append('client_id', this.clientId);
    params.append('client_secret', this.clientSecret);
    params.append('username', email);
    params.append('password',password);

    let headers = 
      new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});
       
      this._http.post('http://localhost:8080/o/oauth2/token', 
        params.toString(), { headers: headers })
        .subscribe(
          data => this.saveToken(data),
          err => alert('Invalid Credentials'));
  }
  
}