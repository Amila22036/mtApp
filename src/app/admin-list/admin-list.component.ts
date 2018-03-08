import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  AdminObservable : Observable<any[]>;
  constructor(private db : AngularFireDatabase) { }

  ngOnInit() {
    this.AdminObservable = this.getAdmins('/Admin');
    
  }

  getAdmins(listpath):Observable<any[]>{
    return this.db.list(listpath).valueChanges();
  }

}
