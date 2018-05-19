import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database-deprecated';
import {PopupModule} from 'ng2-opd-popup';
import {AgmCoreModule} from '@agm/core';
import {ChatModule} from './chat/chat.module'
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AdminListComponent } from './admin-list/admin-list.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { AfService } from './providers/af.service';
import {AngularFirestore,AngularFirestoreModule} from 'angularfire2/firestore';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ArticalPageComponent } from './artical-page/artical-page.component';
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';
import  {AdminmapService} from './admin-list/admin-map/adminmap.service';
import {GeoService} from './providers/geo.service';

import {MaterialModule} from './material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { AdminNavbarComponent } from './admin-list/admin-navbar/admin-navbar.component';
import { ManageUsersComponent } from './admin-list/manage-users/manage-users.component';
import { UsersListComponent } from './admin-list/manage-users/users-list/users-list.component';
import { UserComponent } from './admin-list/manage-users/user/user.component';
import { AdminMapComponent } from './admin-list/admin-map/admin-map.component';
import { ManageVendorsComponent } from './admin-list/manage-vendors/manage-vendors.component';
import { VendorComponent } from './admin-list/manage-vendors/vendor/vendor.component';
import { VendorsListComponent } from './admin-list/manage-vendors/vendors-list/vendors-list.component';
import { ManageAdminsComponent } from './admin-list/manage-admins/manage-admins.component';
import { BusRoutesComponent } from './admin-list/bus-routes/bus-routes.component';
import { BrouteComponent } from './admin-list/bus-routes/broute/broute.component';

import { BusStandsComponent } from './admin-list/bus-routes/bus-stands/bus-stands.component';
import { ManagePlacesComponent } from './admin-list/manage-places/manage-places.component';
import { PlaceListComponent } from './admin-list/manage-places/place-list/place-list.component';
import { PlaceComponent } from './admin-list/manage-places/place/place.component';



export const firebaseConfig ={
    apiKey: "AIzaSyCr8HC0YDcfxIJJELeJ4OH2QEYIH_MxGpI",
    authDomain: "pdmpark-22036.firebaseapp.com",
    databaseURL: "https://pdmpark-22036.firebaseio.com",
    projectId: "pdmpark-22036",
    storageBucket: "pdmpark-22036.appspot.com",
    messagingSenderId: "105445754986"

}

@NgModule({
  declarations: [
    AppComponent,
    AdminListComponent,
    LoginPageComponent,
    AppNavbarComponent,
    ArticalPageComponent,
    HomePageComponent,
    FrontPageComponent,
    MapPageComponent,
    AdminNavbarComponent,
    ManageUsersComponent,
    UsersListComponent,
    UserComponent,
    AdminMapComponent,
    ManageVendorsComponent,
    VendorComponent,
    VendorsListComponent,
    ManageAdminsComponent,
    BusRoutesComponent,
    BrouteComponent,

    BusStandsComponent,

    ManagePlacesComponent,

    PlaceListComponent,

    PlaceComponent,
 


 

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFirestoreModule,
    MaterialModule,
    BrowserAnimationsModule,
    PopupModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:environment.googleMapsKey
    }),
    ChatModule,
    FormsModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [AfService,AdminGuard,SubscriberGuard,AdminmapService,AngularFireDatabase,GeoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
