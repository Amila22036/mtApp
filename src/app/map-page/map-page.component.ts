import { Component, OnInit} from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import {ParkingPlace} from '../place.model';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit{
  prkList : ParkingPlace[];

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
  constructor(private db : AngularFireDatabase,private toastr:ToastrService) {}
  
  AdminObservable : Observable<any[]>;
  placeList: AngularFireList<any>;
  ngOnInit() {
    this.AdminObservable = this.getParkingPlaces('/ParkingPlaces');
    this.getUserLocation();

    var x= this.getData();
    x.snapshotChanges().subscribe(item =>{
      this. prkList=[];
      item.forEach(element =>{
        var y=element.payload.toJSON();
        y["$key"] =element.key;
        this.prkList.push(y as ParkingPlace);
      })
    })
    
  }



  getParkingPlaces(listpath):Observable<any[]>{
    return this.db.list(listpath).valueChanges();
  }

  getData(){
    this.placeList = this.db.list('ParkingPlaces');
    return this.placeList;
  }

  private getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(Position => {
        this.lat=Position.coords.latitude;
        this.lng=Position.coords.longitude;
        
      });
    }


  }

  onDelete(key : string){
    if(confirm('Do you really want to delete this record?')==true)
    {
      this.deleteUser(key);
      this.toastr.warning("Deleted successfully","User Register");
    }
  }

  deleteUser($key:string){
    this.placeList.remove($key);
  }
 

}
