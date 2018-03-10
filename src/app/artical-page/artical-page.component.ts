import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-artical-page',
  templateUrl: './artical-page.component.html',
  styleUrls: ['./artical-page.component.css']
})
export class ArticalPageComponent implements OnInit {

  AdminObservable : Observable<any[]>;
  constructor(private db : AngularFireDatabase) { }

  ngOnInit() {
    this.AdminObservable = this.getAdmins('/Admin');
    
  }

  getAdmins(listpath):Observable<any[]>{
    return this.db.list(listpath).valueChanges();
  }

}
