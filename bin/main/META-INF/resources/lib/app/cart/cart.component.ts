
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';
import { Component } from "@angular/core";
import { SessionStorageService } from '../model/sessionStorageService';
import { Cart } from '../model/cart';

@Component({
	selector:'app-cart',
	templateUrl: '/o/Ecommerce/lib/app/cart/cart.component.html',
  styleUrls: ['./o/Ecommerce/lib/app/cart/cart.component.css']
})
export class CartComponent
{
  item:any[]=[];
  cartItems:any[]=[];
  length:any
  datas:any;
    constructor(private cs:CartService,private http:HttpClient)
    {
    }
   
    ngOnInit() {
      this.handleSubscription();
      this.loadCartItems();
    }
  
    handleSubscription() {
      this.cs.getValue().subscribe(() => {
        this.loadCartItems();
      })
    }
  
    loadCartItems() {
      this.item.splice(0);
      this.cs.getCartItems().subscribe((cartItems) => {
        this.datas= cartItems;
       for(let i=0;i<this.datas.items.length;i++)
        {
            this.item.push(this.datas.items[i]);
           // console.log(this.item);
            //console.log(this.datas.items[i].productName);
        }
      })
    }
    removeCartItems(productId:any)
    {
      console.log("remove cart item"+productId);
      this.cs.removeCartItems(productId).subscribe(()=>
      {
        this.loadCartItems();
      });
      
    }
}