import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../shared/places.service';
import {NgForm,FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  constructor(public placeService : PlacesService,private toastr:ToastrService) { }

  ngOnInit() {
    this.placeService.getData();
   
    this.resetForm();
  }

  onSubmit(vendorForm:NgForm){
    if(vendorForm.value.$key == null)
    {
  
     
       this.toastr.success('Submitted Successfully','parking place Register');
    }
    else
    {
 
      this.placeService.updateUser(vendorForm.value);
      this.toastr.success('Aproved successfully','parking place Register');
    }
      this.resetForm(vendorForm);
      
  }
  resetForm(vendorForm?:NgForm){
    if(vendorForm != null)
      vendorForm.reset();
      this.placeService.selectedUser={
        $key:null,
        Charges :0,
        FreeSlots:0,
        TotSlots:0,   
        approve:false, 
        category:'',
        description:'',
        latitude:0,
        location:'',   
        longitude:0,
        name:''
      }
  }
}
