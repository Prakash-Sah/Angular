import { AuthService } from './auth.service';

import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { of } from "rxjs/observable/of";
import { catchError } from "rxjs/operators";

@Injectable()
export class TestService{
    

    /* Logic for transfering data from child to parent in routing */
	private subject = new BehaviorSubject('1');
	 
	//steps = this.subject.asObservable();
	setSteps(arg:string)
	{
		this.subject.next(arg);
	}
	getSteps():Observable<any>
	{
		//alert("observers"+this.subject.asObservable().subscribe());
		return this.subject.asObservable();
		
	}
/********************************************************************* */
	temp = new Map();
	getValue()
	{
		return this.temp;
	}
	setValue(x:any)
	{
		this.temp=x;
	}
	cost:any;
	getPrice()
	{
		return this.cost;
	}
	setPrice(x:any)
	{
		this.cost=x;
  }
  price:any;
  setBasePrice(price:any)
  {
    this.price=price;
  }
  getBasePrice()
  {
    return this.price;
  }
  id:any;
  getId()
  {
    return this.id;
  }
  setId(id:any)
  {
    this.id=id;
  }
  
    access_token :any;
    datas:any;
    httpHeaders: HttpHeaders = new HttpHeaders();
    httpParams : HttpParams = new HttpParams();


    public clientId = 'id-6da174f2-74fe-7a34-ff46-2aef7504384';
    public clientSecret = 'secret-1497b954-9adc-9a7a-53c1-3bbb5527118b';
  public redirectUri = 'http://localhost:8080';
    
   
    constructor(private http: HttpClient,private auth:AuthService)
    {
         //this.httpHeaders = this.httpHeaders.append("Authorization", "Basic " + btoa("prakash.kumar@gs.liferay.com:test"));
        //Headers = this.httpHeaders.append("Authorization", "Bearer "+window.sessionStorage.getItem('access_token'));
         this.httpHeaders = this.httpHeaders.append("Authorization", `Bearer ${window.sessionStorage.getItem('access_token')}`);
        this.httpParams = this.httpParams.append("grant_type","refresh_token")
          .append("refresh_token","901fa82082cb3d1743b72b17c95ac6a35d2b69cddaf3ef9c2f99782e95e2af")
          .append("client_id","id-6da174f2-74fe-7a34-ff46-2aef7504384")
          .append("client_secret","secret-1497b954-9adc-9a7a-53c1-3bbb5527118b");
      }
    // getAccessToken(){
    //  let httpHeaders = new HttpHeaders()
    //  .set('Content-Type', 'application/x-www-form-urlencoded');
    //  httpHeaders= httpHeaders.append("Authorization", "Basic " + btoa("prakash.kumar@gs.liferay.com:test"));
    //  return  this.http.post("http://localhost:8080/o/oauth2/token",
    //   {
    //     grant_type:'refresh_token',
    //     refresh_token:'901fa82082cb3d1743b72b17c95ac6a35d2b69cddaf3ef9c2f99782e95e2af',
    //     client_id:'id-6da174f2-74fe-7a34-ff46-2aef7504384',
    //     client_secret:'secret-1497b954-9adc-9a7a-53c1-3bbb5527118b'

    //     /*client_id:'id-6da174f2-74fe-7a34-ff46-2aef7504384',
    //     client_secret:'secret-1497b954-9adc-9a7a-53c1-3bbb5527118b',
    //     grant_type:'authorization_code',
    //     code:'98edbbbe17f8a94c69ba996b14d59e3',
    //     redirect_uri:'http://localhost:8080'*/
    //   },
    //   {headers: httpHeaders});

    // }
    getProductList()
    {
       return this.http.get("http://localhost:8080/o/product/v1.0/product",{headers : this.httpHeaders});
    }
    getProductImg(x:any) {
	
        return this.http.get("http://localhost:8080/o/headless-delivery/v1.0/documents/"+x,{headers : this.httpHeaders}).
        pipe(catchError(this.handleError));
      }
    getHeaderImg()
    {
        
        return this.http.get("http://localhost:8080/o/headless-delivery/v1.0/documents/36787",{headers : this.httpHeaders}).
        pipe(catchError(this.handleError));
    }
     
     getContent(x:any)
     {
        return this.http.get("http://localhost:8080/o/headless-delivery/v1.0/structured-contents/"+x,{ headers: this.httpHeaders }).
        pipe(catchError(this.handleError));
     }
     getAttribute(x:any,y:any)
     {
         return this.http.get("http://localhost:8080/o/product/v1.0/attribute/"+x+"/"+y,{headers : this.httpHeaders}).
         pipe(catchError(this.handleError));
     }

     getProduct(id:any)
     {
        return this.http.get("http://localhost:8080/o/product/v1.0/product/"+id,{headers:this.httpHeaders}).
        pipe(catchError(this.handleError));
     }



     private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(`Backend returned code ${error.status}, ` +`body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return of([]);
      }	


     
    

}
