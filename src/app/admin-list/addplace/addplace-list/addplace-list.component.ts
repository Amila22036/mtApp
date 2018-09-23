import { Component, OnInit } from '@angular/core';
import { AddplaceService } from '../serv/addplace.service';
import { Addplaces } from '../serv/addplace.model';
import { element } from 'protractor';
//import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-addplace-list',
  templateUrl: './addplace-list.component.html',
  styleUrls: ['./addplace-list.component.css']
})
export class AddplaceListComponent implements OnInit {
  AddplaceList: Addplaces[];
  
  constructor(private addplaceService: AddplaceService) { }

  ngOnInit() {
    var x = this.addplaceService.getData();
    x.snapshotChanges().subscribe(item => {
      this.AddplaceList=[];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this. AddplaceList.push(y as Addplaces);
      });
    });
  }
  onEdit(Addplaces: Addplaces) {
    this.addplaceService.selectedAddplace = Object.assign({}, Addplaces);
    console.log(Addplaces);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.addplaceService.deleteAddplace(key);
      //this.tostr.warning("Deleted Successfully", "Employee register");
    }
  }

}
