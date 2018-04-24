import { Component, OnInit } from '@angular/core';
import {VendorsService} from './shared/vendors.service';

@Component({
  selector: 'manage-vendors',
  templateUrl: './manage-vendors.component.html',
  styleUrls: ['./manage-vendors.component.css'],
  providers:[VendorsService]
})
export class ManageVendorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
