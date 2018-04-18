
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

const routers: Routes =[
    {path:' ',component:AppComponent},
    {path:'login',component:LoginPageComponent},
    {path:'admin',component:AdminListComponent,canActivate:[AdminGuard]},
    {path:'article',component:ArticalPageComponent,canActivate:[SubscriberGuard]},
    {path:'home',component:HomePageComponent},
    {path:'Map',component:MapPageComponent},
    {path:'Manage-users',component:ManageUsersComponent,canActivate:[AdminGuard]}
]
@NgModule({
    imports:[
        RouterModule.forRoot(routers)
     

    ],
    exports: [RouterModule],
    providers:[]
        
})

export class AppRoutingModule{}