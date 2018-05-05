import { Injectable } from '@angular/core';
import {broutes} from './broutes.model';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';

@Injectable()
export class BroutesService {
  busRoutesList: AngularFireList<any>;
  selectedUser: broutes = new broutes();

  constructor(private firebase:AngularFireDatabase) { }


  getData(){
    this.busRoutesList = this.firebase.list('user');
    return this.busRoutesList;
  }

  insertUser(broute : broutes){
    this.busRoutesList.push({
      Name :broute.Name,
      location :broute.location,
      description :broute.description,
      PhoneNumber :broute.PhoneNumber
    });
   }

   updateUser(broute : broutes){
    this.busRoutesList.update(broute.$key,{
      Name :broute.Name,
      location :broute.location,
      description :broute.description,
      PhoneNumber :broute.PhoneNumber
    });
  }

  deleteUser($key:string){
    this.busRoutesList.remove($key);
  }

}
