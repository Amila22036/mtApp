import { Component, OnInit } from '@angular/core';
import {UsersService} from '../shared/users.service';
import {NgForm,FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UsersService]
})
export class UserComponent implements OnInit {

  constructor(private userService : UsersService,private toastr:ToastrService) { }

  ngOnInit() {
    this.userService.getData();
    this.resetForm();
    
  }

  onSubmit(userForm:NgForm){
      this.userService.insertUser(userForm.value);
      this.resetForm(userForm);
      this.toastr.success('Submitted Successfully','User Register');
  }

  resetForm(userForm?:NgForm){
    if(userForm != null)
    {
      userForm.reset();
    }
      this.userService.selectedUser={
        $key:null,
        FirstName:'',
        LastName:'',
        Email:'',
        PhoneNumber:0
      }
  }
}
