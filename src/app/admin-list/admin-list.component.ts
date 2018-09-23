import { Component, OnInit } from '@angular/core';
import {UsersService} from '../admin-list/manage-users/shared/users.service';
import {User} from '../admin-list/manage-users/shared/user.model';
import {VendorsService} from '../admin-list/manage-vendors/shared/vendors.service';
import {Vendors} from '../admin-list/manage-vendors/shared/vendors.model';
import {PlacesService} from '../admin-list/manage-places/shared/places.service';
import {ParkingPlace } from '.././place.model';
import { element } from 'protractor';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css','./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  userList : User[];
  VendorList : Vendors[];
  PlaceList : ParkingPlace[];
  
  constructor(private userService: UsersService,private vendorService: VendorsService,private placeService: PlacesService) { }

  ngOnInit() { 
    var x= this.userService.getData();
    x.snapshotChanges().subscribe(item =>{
      this.userList=[];
      item.forEach(element =>{
        var y=element.payload.toJSON();
        y["$key"] =element.key;
        this.userList.push(y as User);
      })
    })

    var x2= this.vendorService.getData();
    x2.snapshotChanges().subscribe(item =>{
      this.VendorList=[];
      item.forEach(element =>{
        var y2=element.payload.toJSON();
        y2["$key"] =element.key;
        this.VendorList.push(y2 as Vendors);
      })
    })

    var x3= this.placeService.getData();
    x3.snapshotChanges().subscribe(item =>{
      this.PlaceList=[];
      item.forEach(element =>{
        var y3=element.payload.toJSON();
        y3["$key"] =element.key;
        this.PlaceList.push(y3 as ParkingPlace);
      })
    })

  }



}
