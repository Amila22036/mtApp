import { Component, OnInit } from '@angular/core';
import {VendorsService} from '../shared/vendors.service';
import {NgForm,FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  VendorNIC = new FormControl();
 
  constructor(public vendorService : VendorsService,private toastr:ToastrService) {
    
   }
  


  ngOnInit() {
    this.vendorService.getData();
   
    this.resetForm();
   
  }

  onSubmit(vendorForm:NgForm){
    if(vendorForm.value.$key == null)
    {
  
       this.vendorService.insertUser(vendorForm.value);
       this.toastr.success('Submitted Successfully','Vendor Register');
    }
    else
    {
 
      this.vendorService.updateUser(vendorForm.value);
      this.toastr.success('Updated Successfully','Vendor Register');
    }
      this.resetForm(vendorForm);
      
  }

  resetForm(vendorForm?:NgForm){
    if(vendorForm != null)
      vendorForm.reset();
      this.vendorService.selectedUser={
        $key:null,
        FirstName :'',
        LastName:'',
        NIC : '',
        PhoneNumber:0,
        Email: '',
        Password: ''
      }
  }

}

