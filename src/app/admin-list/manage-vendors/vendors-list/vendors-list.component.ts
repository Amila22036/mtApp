import { Component, OnInit } from '@angular/core';
import {VendorsService} from '../shared/vendors.service';
import {Vendors} from '../shared/vendors.model';
import { element } from 'protractor';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.css']
})
export class VendorsListComponent implements OnInit {

  VendorList : Vendors[];
  btnText:string;
  p: number = 1;
  term='';
  constructor(public vendorService: VendorsService,private toastr:ToastrService) { }

  ngOnInit() {
    var x= this.vendorService.getData();
    x.snapshotChanges().subscribe(item =>{
      this.VendorList=[];
      item.forEach(element =>{
        var y=element.payload.toJSON();
        y["$key"] =element.key;
        this.VendorList.push(y as Vendors);
      })
    })
  }

  onEdit(Vendor: Vendors){
 
    this.vendorService.selectedUser= Object.assign({},Vendor);
      console.log(Vendor);
  }

  onDelete(key : string){
    if(confirm('Do you really want to delete this record?')==true)
    {
      this.vendorService.deleteUser(key);
      this.toastr.warning("Deleted successfully","Vendor Register");
    }
  }

}
