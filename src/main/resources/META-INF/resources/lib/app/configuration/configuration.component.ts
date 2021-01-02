import { ViewDetails } from './../viewDetails/viewDetails.component';
import { TestService } from '../test.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject, forwardRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-configuration',
  templateUrl: '/o/Ecommerce/lib/app/configuration/configuration.component.html',
  styleUrls: ['./o/Ecommerce/lib/app/configuration/configuration.component.css']
})
export class ConfigurationComponent
{

	datas:any;
	map = new Map();
	flag:any;
	isClick: boolean=true;
	price:any[]=[];
	constructor(private svc:TestService,private http: HttpClient,@Inject(forwardRef(() => ViewDetails)) 
	private _parent: ViewDetails){
		this.firstCall();
	}
	firstCall()
	{
		this.flag =0;
		this.isClick=true;
		//401
		let id = this.svc.getId();
		this.price.push(this.svc.getBasePrice());
		console.log("id in config"+id);
		this.svc.getAttribute(0,id).subscribe(data=>{
			this.datas=data;
			for(let i=0;i<this.datas.items.length;i++)
			{
				
				if(this.map.has(this.datas.items[i].attributeType))
				{
					let temp:object[]=[];
					temp = this.map.get(this.datas.items[i].attributeType)!;
					temp.push(this.datas.items[i]);
					//console.log(this.datas.items[i]);
					//console.log("if  "+temp);
					this.map.set(this.datas.items[i].attributeType,temp);
					console.log("if  "+this.datas.items[i].attributeType,temp);
				}
				else
				{
					let temp:object[]=[];
					temp.push(this.datas.items[i]);
					this.map.set(this.datas.items[i].attributeType,temp);
					this.flag = ++this.flag;
					this.isView[this.flag]=true;	
				}
				
				
			}

		});
		//this.svc.setValue(this.map);
	}
	call(attributeId:any,productId:any,imageId:any)
	{
		if(imageId)
		{
			console.log("image call"+imageId);
			this._parent.imageCall(imageId);
		}
		let arr:any[]=[];
		this.svc.getAttribute(attributeId,productId).subscribe(data=>{
			this.datas=data;
			for(let i=0;i<this.datas.items.length;i++)
			{
				if(this.map.has(this.datas.items[i].attributeType))
				{
					let temp:object[]=[];
					this.map.set(this.datas.items[i].attributeType,temp);
				}
			}
			for(let i=0; i<this.datas.items.length;i++)
				{
					if(this.map.has(this.datas.items[i].attributeType))
					{
						let temp:object[]=[];
						temp = this.map.get(this.datas.items[i].attributeType)!;
						temp.push(this.datas.items[i]);
						//console.log(this.datas.items[i]);
						//console.log("if  "+temp);
						this.map.set(this.datas.items[i].attributeType,temp);
						console.log("if  "+this.datas.items[i].attributeType,temp);
					}
					else
					{
						let temp:object[]=[];
						temp.push(this.datas.items[i]);
						this.map.set(this.datas.items[i].attributeType,temp);
						this.flag = ++this.flag;
						this.isView[this.flag]=true;
					}
				}
		})
		//this.svc.setValue(this.map);
	}


	
	
	isView:any[]=[];
	cost(price:any,index:any)
	{
		this.price.splice(index+1);
		this.price.push(price);
		this.show(index);
		this.add();
	}
	add()
	{
		let sum=0;
		for(let i=0;i<this.price.length;i++)
		{
			sum = sum+this.price[i];
		}
		console.log("Estimated price till now"+sum);
		this.svc.setPrice(sum);
	}

	//Enabling and Disabling the attribute
	counter:number=0;
	show(index:any)
	{
		if(this.counter>index)
		{
			for(let i=index+1;i<=this.counter+1;i++)
			{
				this.isView[i]=true;
			}
		}
		for(let i=0;i<=index+1;i++)
		{
			this.isView[i]=false;
		}
		this.counter=index;
		console.log(this.isView);
		this.check();
	}

	//Check for enabling and disabling on continue button
	check() {
		for(let i=0;i<this.isView.length;i++)
		{
			if(!this.isView[i])
			{
				this.isClick=false;
			}
			else{
				this.isClick=true;
			}
		}
	}
	resetValue()
	{
		this.map.clear();
		this.isView.splice(0,this.isView.length);
		this.items.clear();
		this.firstCall();
	}
	ngOnInit(){
		this.svc.setSteps('1');
		//this.svc.setTemp(this.temp);
	}
	items = new Map();
	selectedAttribute(attributeType:any,attributeName:any)
	{
			if(this.items.has(attributeType))
			{
				this.items.set(attributeType,attributeName);
			}
			else
			{
				this.items.set(attributeType,attributeName);
			}
		this.svc.setValue(this.items);
	}

	
}