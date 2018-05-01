import { Component, OnInit,OnDestroy} from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import {GeoService} from '../providers/geo.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit , OnDestroy{

  lat:number;
  lng:number;

  lngg:number = 80.64547332956408;
  latt:number = 7.287357319550594;
  markers:any;
  subscription:any;

  private icon = {
    url: 'https://firebasestorage.googleapis.com/v0/b/pdmpark-22036.appspot.com/o/easyTravelMessage.png?alt=media&token=ab6dc19b-e3de-4b68-8664-d437d8fcdfdc', 
    scaledSize: {
      height: 30,
      width: 30
    }
  };
  constructor(private geo:GeoService,private db : AngularFireDatabase) { 

  }

  ngOnInit() {
    this.getUserLocation();
    this.getUserLocation();
    this.subscription = this.geo.hits
    .subscribe(hits => this.markers = hits)  
    console.log('START OF MARKERS '+this.markers+' ENDOF MARKERS');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }



  private getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(Position => {
        this.lat=Position.coords.latitude;
        this.lng=Position.coords.longitude;

        this.geo.getLocations(3000,[this.lat ,this.lng]);
        
      });
    }

  }


}
