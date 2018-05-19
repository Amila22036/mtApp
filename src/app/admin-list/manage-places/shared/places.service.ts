import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {ParkingPlace } from '../../../place.model';

@Injectable()
export class PlacesService {
  VendorList: AngularFireList<any>;
  selectedUser: ParkingPlace = new ParkingPlace();
  constructor(private firebase:AngularFireDatabase) { }

  getData(){
    this.VendorList = this.firebase.list('ParkingPlaces');
    return this.VendorList;
  }

  updateUser(place : ParkingPlace){
    this.VendorList.update(place.$key,{
     name :place.name ,
     location :place.location,
    approve: place.approve
    });
    
  }

  deleteUser($key:string){
    this.VendorList.remove($key);
  }

}
