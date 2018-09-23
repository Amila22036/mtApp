import { Component, OnInit } from '@angular/core';
import { AddplaceService } from './serv/addplace.service';

@Component({
  selector: 'app-addplace',
  templateUrl: './addplace.component.html',
  styleUrls: ['./addplace.component.css'],
  providers :[AddplaceService]
})
export class AddplaceComponent implements OnInit {

  constructor(private addplaceService : AddplaceService) { }

  ngOnInit() {
  }

}
