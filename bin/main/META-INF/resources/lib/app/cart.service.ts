import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Cart } from "./model/cart";

@Injectable()
export class CartService{
  
    subject = new Subject();
    httpHeaders: HttpHeaders = new HttpHeaders();
    constructor(private http: HttpClient)
    {	
        this.httpHeaders = this.httpHeaders.append("Authorization", "Basic " + btoa("prakash.kumar@gs.liferay.com:test"));
    }
    
    setValue(x:any)
    {
        this.subject.next(x);
    }
    getValue()
    {
        return this.subject.asObservable();
    }


    AddtoCart(id:any,product:any)
    {
        return this.http.post("http://localhost:8080/o/product/v1.0/cart/"+id,product,{headers : this.httpHeaders});
    }
    getCartItems():Observable<any>
    {
        return this.http.get("http://localhost:8080/o/product/v1.0/cart",{headers : this.httpHeaders});
    }
    removeCartItems(productId:any)
    {
        return this.http.delete("http://localhost:8080/o/product/v1.0/cart/"+productId,{headers:this.httpHeaders});
    }
}
    