import { Injectable } from '@angular/core';

import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Vendors } from './vendors.model';

@Injectable()
export class VendorsService {
  VendorList: AngularFireList<any>;
  selectedUser: Vendors = new Vendors();

  constructor(private firebase:AngularFireDatabase) { }

  getData(){
    this.VendorList = this.firebase.list('Vendors');
    return this.VendorList;
  }

  insertUser(vendor : Vendors){
    this.VendorList.push({
      FirstName :vendor.FirstName,
      LastName :vendor.LastName,
      NIC : vendor.NIC,
      PhoneNumber :vendor.PhoneNumber,
      Email : vendor.Email,
      Password : vendor.Password
    });
   }

   updateUser(vendor : Vendors){
     this.VendorList.update(vendor.$key,{
      FirstName :vendor.FirstName,
      LastName :vendor.LastName,
      NIC : vendor.NIC,
      PhoneNumber :vendor.PhoneNumber,
      Email : vendor.Email,
      Password : vendor.Password
     });
     
   }

   deleteUser($key:string){
     this.VendorList.remove($key);
   }


}
