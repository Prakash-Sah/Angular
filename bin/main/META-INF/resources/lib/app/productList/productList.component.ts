import { Product } from './../model/product';
import { WishListService } from './../wishList.service';
import { SessionStorageService } from '../model/sessionStorageService';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';
import { TestService } from '../test.service';
import { Component } from "@angular/core";
import { Cart } from '../model/cart';

@Component({
	selector:'app-productList',
	templateUrl: '/o/Ecommerce/lib/app/productList/productList.component.html',
  styleUrls: ['./o/Ecommerce/lib/app/productList/productList.component.css']
})
export class ProductList
{
    datas:any;
    temp:any[]=[];
    addedToWishList:boolean[]=[];
    item: any;
    constructor(private ts:TestService,private cs:CartService,private ws:WishListService,private sessionStorage:SessionStorageService)
    {
        ts.getProductList().subscribe(data=>{
            this.datas= data;
            for(let i=0;i<this.datas.items.length;i++)
            {
                this.temp.push(this.datas.items[i]);
                this.addedToWishList.push(this.datas.items[i].wishlist);
                console.log(this.temp);
                console.log(this.datas.items[i].productImg);
            }
        })
    }
    cart(id:any,product:Product)
    {
        
        this.cs.AddtoCart(id,new Cart(id,product,1,product.price)).subscribe(()=>{
            this.cs.setValue(product);
        })
    }
    
    
    handleAddToWishlist(id:any,index:any,product:Product) {
        this.ws.addToWishlist(id,product).subscribe(data=> {
          this.item = data;
          this.addedToWishList[index] =this.item.wishlist;
        })
      }
    
      handleRemoveFromWishlist(id:any,index:any,product:Product) {
        this.ws.removeFromWishlist(id,product).subscribe(data => {
          this.item = data;
          this.addedToWishList[index] =this.item.wishlist;
        })
      }
    
}