import { Component, OnInit } from '@angular/core';
import {PlacesService} from './shared/places.service';

@Component({
  selector: 'manage-places',
  templateUrl: './manage-places.component.html',
  styleUrls: ['./manage-places.component.css'],
  providers:[PlacesService]
})
export class ManagePlacesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
