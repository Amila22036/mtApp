import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../shared/places.service';
import {ParkingPlace } from '../../../place.model';
import { element } from 'protractor';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  PlaceList : ParkingPlace[];
  constructor(private placeService: PlacesService,private toastr:ToastrService) { }

  ngOnInit() {
    var x= this.placeService.getData();
    x.snapshotChanges().subscribe(item =>{
      this.PlaceList=[];
      item.forEach(element =>{
        var y=element.payload.toJSON();
        y["$key"] =element.key;
        this.PlaceList.push(y as ParkingPlace);
      })
    })
  }

  onEdit(Place: ParkingPlace){
 
    this.placeService.selectedUser= Object.assign({},Place);
      console.log(Place);
  }

  onDelete(key : string){
    if(confirm('Do you really want to delete this record?')==true)
    {
      this.placeService.deleteUser(key);
      this.toastr.warning("Deleted successfully","User Register");
    }
  }

}
