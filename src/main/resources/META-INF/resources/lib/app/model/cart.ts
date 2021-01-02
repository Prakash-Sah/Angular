import { Product } from "./product";

export class Cart{
    productId:number;
    productName:string;
    productDesc:string;
    qty:number;
    price:number;
    constructor(productId:number,product:Product,qty=1,price:number)
    {
        this.productId=productId;
        this.productName=product.productName;
        this.productDesc=product.productDesc;
        this.price=price;
        this.qty=qty;
    }

}