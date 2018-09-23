
import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { ArticalPageComponent} from './artical-page/artical-page.component';
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';
import { HomePageComponent} from './home-page/home-page.component';
import {MapPageComponent} from './map-page/map-page.component';
import {ManageUsersComponent} from './admin-list/manage-users/manage-users.component';
import  {AdminMapComponent} from './admin-list/admin-map/admin-map.component';
import { ManageVendorsComponent } from './admin-list/manage-vendors/manage-vendors.component';
import {GoogleMapComponent} from './admin-list/google-map/google-map.component';
import {ManagePlacesComponent} from './admin-list/manage-places/manage-places.component';
import {AddplaceComponent} from './admin-list/addplace/addplace.component';

const routers: Routes =[
    {path:' ',component:AppComponent},
    {path:'login',component:LoginPageComponent},
    {path:'admin',component:AdminListComponent,canActivate:[AdminGuard]},
    {path:'article',component:ArticalPageComponent,canActivate:[SubscriberGuard]},
    {path:'home',component:HomePageComponent},
    {path:'Map',component:MapPageComponent},
    {path:'Manage-users',component:ManageUsersComponent,canActivate:[AdminGuard]},
    {path:'Admin-map',component:AdminMapComponent,canActivate:[AdminGuard]},
    {path:'Manage-vendors',component:ManageVendorsComponent,canActivate:[AdminGuard]},
    {path:'bus-routes',component:AddplaceComponent,canActivate:[AdminGuard]},
    {path:'bus-routes-map',component:GoogleMapComponent,canActivate:[AdminGuard]},
    {path:'Manage-places',component:ManagePlacesComponent,canActivate:[AdminGuard]}
]
@NgModule({
    imports:[
        RouterModule.forRoot(routers)
     

    ],
    exports: [RouterModule],
    providers:[]
        
})

export class AppRoutingModule{}