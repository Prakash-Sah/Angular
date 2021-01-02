import { Product } from '../model/product';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TestService } from "../test.service";

@Component({
	selector:'app-viewDetails',
	templateUrl: '/o/Ecommerce/lib/app/viewDetails/viewDetails.component.html',
  styleUrls: ['./o/Ecommerce/lib/app/viewDetails/viewDetails.component.css']
})
export class ViewDetails
{
    /*   Passing data from parent to child in routing*/
	 steps:number =1;
	 temp:any;
	 // subscription:Subscription;
	constructor(private ts: TestService, private http: HttpClient,private route: ActivatedRoute){
		//svc.printToConsole("prakash");
		/*this.svc.getSteps().subscribe(x => {                  
			this.steps = x; 
		});*/
		//this.search();
		
    }
    ngOnInit(): void {
        this.getProduct();
      }
      product:any;
      getProduct(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.ts.setId(id);
        this.ts.getProduct(id)
          .subscribe(data=>{
            this.product= data;
            console.log(this.product);
            this.search(this.product);
          });
      }
    datas:any;
    link:any;
    productName:any;
    configImg:any;
    contents:any[]=[];
    contentId:any;
    access_token:any;
    search(product:Product)
	{
		this.ts.setBasePrice(product.price);
		let httpHeaders: HttpHeaders = new HttpHeaders();
      httpHeaders = httpHeaders.append("Authorization", "Basic " + btoa("prakash.kumar@gs.liferay.com:test"));
      this.link = product.productImg;
      this.productName = product.productName;
      this.contentId = product.productContent;
		/*this.ts.getProductImg(37767).subscribe(data =>{
			this.datas = data;
			this.link=this.datas.contentUrl;
		})*/
    this.getContent(product.productContent);
		this.ts.getHeaderImg().subscribe(data=>{
			this.datas=data;
      this.configImg = this.datas.contentUrl;
    })
    
    this.ts.getAccessToken().subscribe(data=>
      {
        this.datas=data;
        //this.access_token=this.datas.access_token;
        console.log("access_token is  "+this.datas);
       // httpHeaders = httpHeaders.append('Authorization',  `Bearer ${this.access_token}`);
      })
	
    }
    getContent(x:any)
    {
      console.log("inside getContent"+  x);
      this.ts.getContent(x).subscribe(data=>{
        this.datas=data;
        for(let i=0; i<this.datas.contentFields.length;i++)
          {
            this.contents.push(this.datas.contentFields[i].value.data);
            //console.log(this.datas.contentFields[i].value.data);
          }
          })
    }
    imageCall(x:any) {

        console.log("inside imageCall")
        let httpHeaders: HttpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append("Authorization", "Basic " + btoa("prakash.kumar@gs.liferay.com:test"));
         
        this.ts.getProductImg(x).subscribe(data =>{
            this.datas = data;
            this.link=this.datas.contentUrl;
        })
    }
}