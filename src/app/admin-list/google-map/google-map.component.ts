import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoService } from '../../providers/geo.service';
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  lat: number;
  lng: number;
  
  markers: any;
  subscription: any;

  constructor(private geo: GeoService) { }

  ngOnInit() {
    this.getUserLocation()
    this.subscription = this.geo.hits
        .subscribe(hits => this.markers = hits)
  }
  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

      });
    }
  }
}
