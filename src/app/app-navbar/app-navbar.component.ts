import { Component, OnInit } from '@angular/core';
import {AfService } from '../providers/af.service';
import {User} from '../providers/user';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  user:User;
  adminPW:string;

  constructor(public afService:AfService) { }

  ngOnInit() {
    this.afService.user$.subscribe(user => this.user = user);

      
  }

  logout(){
  

    this.afService.logout();
  }
}
