import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AdminListComponent } from './admin-list/admin-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AfService } from './providers/af.service';
import {AngularFirestore,AngularFirestoreModule} from 'angularfire2/firestore';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ArticalPageComponent } from './artical-page/artical-page.component';
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';

import {MaterialModule} from './material.module';
 

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
    BrowserAnimationsModule
  ],
  providers: [AfService,AdminGuard,SubscriberGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
