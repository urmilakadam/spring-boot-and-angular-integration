import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { User } from './module/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-details';


  user:User;
  userData:User[];

  constructor( private _userService:UserService){
    this.user={
      "id":null,
        "firstName":null,
        "lastName":null,
        "email":null
    };
  

  }
  saveUser(){
    if(this.user == undefined){
      window.alert("Enter Data");
    }else{
      this._userService.saveData(this.user).subscribe(data=>{

      },(err)=>{

      });
    }

  }


}
