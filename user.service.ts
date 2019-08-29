import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../module/User';
import {map} from 'rxjs/Operators';
 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  
  public getAllData():any{

    return this._http.get("/api/getall");


  //  return  this._http.get("/api/getall").pipe(map(data=>{
  //     return data;
  //  },(err)=>{
  //     window.alert(err);
  //  }));
  }

public saveData(data:User){
  
  return this._http.post("/api/savedata",data).pipe(map(data=>{
    
    return data;
  },(err)=>{
  }));
}

public getById(id){
  return this._http.get("/api/getbyid?id="+id);
}

public deleteinfo(id){
  return this._http.delete("/api/delete?id="+id);
}

public updataData(user:User){
  return this._http.put("/api/update",user);
}

}
