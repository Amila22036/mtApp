import { Injectable } from '@angular/core';

import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Vendor } from './vendors.model';

@Injectable()
export class VendorsService {
  VendorList: AngularFireList<any>;
  selectedUser: Vendor = new Vendor();
  constructor(private firebase:AngularFireDatabase) { }

  getData(){
    this.VendorList = this.firebase.list('vendor');
    return this.VendorList;
  }

  insertUser(vendor : Vendor){
    this.VendorList.push({
      FirstName :vendor.FirstName,
      LastName :vendor.LastName,
      NIC : vendor.NIC,
      PhoneNumber :vendor.PhoneNumber,
      Email : vendor.Email,
      Password : vendor.Password
    });
   }

   updateUser(vendor : Vendor){
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
