import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../module/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _userService:UserService) { }

  data:User[];
  ngOnInit() {
    this.getAllData();
  }
  
 public getAllData(){
   this._userService.getAllData().subscribe(response=>{
     debugger
      this.data=response;
   },(err)=>{
     debugger
     if(err instanceof Error){
       window.alert("Internal server error");
     }
     else{
       window.alert("Client side error");
     }
   });
  }

  deleteUser(user: User): void {
    this._userService.deleteinfo(user)
      .subscribe( res => {
        this.data = this.data.filter(u => u !== user);
      })
  };
}
