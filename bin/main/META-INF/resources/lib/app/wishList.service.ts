import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";


@Injectable()
export class WishListService{
    httpHeaders: HttpHeaders = new HttpHeaders();
    constructor(private http: HttpClient)
    {	
      this.httpHeaders = this.httpHeaders.append("Authorization", "Basic " + btoa("prakash.kumar@gs.liferay.com:test"));
    }

 /* getWishlist() {
    return this.http.get("http://localhost:3000/wish").pipe(
        map((result: any[]) => {
          let productIds = [];
  
          result.forEach(item => productIds.push(item.id))
  
          return productIds;
        })
      )
  }*/
 

  addToWishlist(productId:any,product:any) {
    return this.http.post("http://localhost:8080/o/product/v1.0/product/addWishlist/"+productId,product,{headers:this.httpHeaders})
  }

  removeFromWishlist(productId:any,product:any) {
    return this.http.post("http://localhost:8080/o/product/v1.0/product/removeWishlist" + '/' +productId,product,{headers:this.httpHeaders});
  }
}
    