import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Addplaces} from './addplace.model';



@Injectable()
export class AddplaceService {
 

  AddplaceList: AngularFireList<any>;
  selectedAddplace: Addplaces = new Addplaces();
  constructor(private firebaseConfig :AngularFireDatabase ) { 
   
  }

  getData(){
    this.AddplaceList = this.firebaseConfig.list('addplace');
    return this.AddplaceList;
  }
  insertAddplace(addplaces :Addplaces)
  { 
   
    this.AddplaceList.push({
      busstandname: addplaces.busstandname,
      currentcity:  addplaces. currentcity,
      location:  addplaces.location,
      phonenumber:  addplaces.phonenumber,
      discription:  addplaces.discription
    });
  }
  updateAddplace(addplaces : Addplaces){
    this.AddplaceList.update(addplaces.$key,
      {
        busstandname: addplaces.busstandname,
        currentcity:  addplaces. currentcity,
        location:  addplaces.location,
        phonenumber:  addplaces.phonenumber,
        discription:  addplaces.discription
      });
  }
  deleteAddplace($key : string){
    this.AddplaceList.remove($key);
  }
 

  
  }

