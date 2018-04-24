import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../../environments/environment';
import { AdminmapService } from './adminmap.service';
import { GeoJson, FeatureCollection } from './admin-map';
@Component({
  selector: 'admin-map',
  templateUrl: './admin-map.component.html',
  styleUrls: ['./admin-map.component.css'],

})


export class AdminMapComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 7.290932775752239;
  lng = 80.6377217305618;
  message = 'Click on map to add marker';

  // data
  source: any;
  markers: any;
    
 
 

  constructor(private mapService: AdminmapService) {
 
    
  }

  ngOnInit() {
    this.markers = this.mapService.getMarkers()
    this.buildMap()

    
  }


  private initializeMap() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lng, this.lat]
        })
      });
    }

    this.buildMap()

  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 7,
      center: [this.lng, this.lat]
    });



this.map.addControl(new mapboxgl.NavigationControl());


//// Add Marker on Click
this.map.on('click', (event) => {
  const coordinates = [event.lngLat.lng, event.lngLat.lat]
  const newMarker   = new GeoJson(coordinates, { message: this.message })
  this.mapService.createMarker(newMarker)
})


/// Add realtime firebase data on map load
this.map.on('load', (event) => {

  /// register source
  this.map.addSource('firebase', {
     type: 'geojson',
     data: {
       type: 'FeatureCollection',
       features: []
     }
  });

  /// get source
  this.source = this.map.getSource('firebase')

  /// subscribe to realtime database and set data source
  this.markers.subscribe(markers => {
      let data = new FeatureCollection(markers)
      this.source.setData(data)
  })

  /// create map layers with realtime data
  this.map.addLayer({
    id: 'firebase',
    source: 'firebase',
    type: 'symbol',
    layout: {
      'text-field': '{message}',
      'text-size': 24,
      'text-transform': 'uppercase',
      'icon-image': 'rocket-15',
      'text-offset': [0, 1.5]
    },
    paint: {
      'text-color': '#f16624',
      'text-halo-color': '#fff',
      'text-halo-width': 2
    }
  })

})

}


/// Helpers

removeMarker(marker) {
this.mapService.removeMarker(marker.$key)
}

flyTo(data: GeoJson) {
this.map.flyTo({
  center: data.geometry.coordinates
})
}
}

