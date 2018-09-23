import { Component, OnInit } from '@angular/core';
import { AddplaceService } from '../serv/addplace.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs/Observable';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-addplaces',
  templateUrl: './addplaces.component.html',
  styleUrls: ['./addplaces.component.css'],
  providers :[AddplaceService],
  
})
export class AddplacesComponent implements OnInit {


  constructor(private addplaceService : AddplaceService) { 
  
  }
  
  ngOnInit() {
   this.resetForm();
   this.addplaceService.getData();

  }
  onSubmit(addplaceForm: NgForm) {
    if (addplaceForm.value.$key == null)
      this.addplaceService.insertAddplace(addplaceForm.value);
    else
      this.addplaceService.updateAddplace(addplaceForm.value);
      this.resetForm(addplaceForm);
      //this.tostr.success('Submitted Succesfully');
  }
  resetForm(addplaceForm?: NgForm) {
    if (addplaceForm != null)
      addplaceForm.reset();
    this.addplaceService.selectedAddplace = {
      $key :null,
      busstandname : '',
      currentcity : '',
      location : '',
      phonenumber : 0,
      discription : '',
    }
  }
  
}