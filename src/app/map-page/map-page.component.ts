import { Component, OnInit } from '@angular/core';
import {AgmCoreModule} from '@agm/core';
@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  lat:Number;
  lng:Number;
  constructor() { }

  ngOnInit() {
    this.getUserLocation();
  }

  private getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(Position => {
        this.lat=Position.coords.latitude;
        this.lng=Position.coords.longitude;
      });
    }

  }

}
