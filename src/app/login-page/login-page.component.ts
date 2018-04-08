import { Component, OnInit } from '@angular/core';
import {AfService } from '../providers/af.service';
import {User} from '../providers/user';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Popup} from 'ng2-opd-popup'

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user:User;
  adminPass:string;
  EnterdPW:string;
  check:boolean = true;
  adminkey:boolean=true;

  AdminObservable : Observable<User[]>;
  constructor(public afService:AfService, private db:AngularFireDatabase,private popup:Popup) { }

  ngOnInit() {

    
    this.afService.user$.subscribe(user => this.user = user);
    this.check=true;
    this.adminkey=true;
  }

 PWmatch(EnterdPW){

  this.afService.getUser().subscribe(user => {console.log(user.password)

    
    })
   if(EnterdPW==this.user.password)
   {
     
     console.log("Pass matched");
     this.afService.SendAdminPw(this.user,this.user.password);
     this.check=false;
     return true;
   }
   else{
     console.log("Pass Not match");
     console.log(EnterdPW +"And"+ this.user.password);
     this.popup.options={
       color:"red",
       widthProsentage: 85,
       confirmBtnContent: "OK",
       animationDuration: 1,
       animation: "bounceIn"
     }
     this.popup.show();
   }

 }
 
 YourConfirmEvent(){
   this.popup.hide();
 }
 YourCancelEvent(){
   this.popup.hide();
 }
 

 changeAdminkey(){
   this.adminkey=false;
 }

  login(){
  
    this.afService.loginWithGoogle();
    this.afService.getUser().subscribe(user => {console.log("INside LOGIN FUNCTION"+this.user.password)});
    this.afService.updateUser(this.user);
    this.check=true;
    this.adminkey=true;
   
  }

}


