import { Injectable } from "@angular/core";
import { SessionStorageModel } from "./sessionStorageModel";

@Injectable()
    export class SessionStorageService {

    sessionStorageModel:SessionStorageModel=new SessionStorageModel();
    constructor() { }

    public set(key:any,value:any){
    this.sessionStorageModel[key]=value;
    }
    get(key:any):string{
    return this.sessionStorageModel[key]
    }
    getAll()
    {
        return this.sessionStorageModel;
    }
    remove(key:any){
    this.sessionStorageModel[key]=null;
    }
    clear(){
    this.sessionStorageModel=new SessionStorageModel();
    }
    }