import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';

import { AdminListComponent } from '../admin-list/admin-list.component';

import { AdminGuard } from '../guards/admin.guard';
import { SubscriberGuard } from '../guards/subscriber.guard';
import {ManageUsersComponent} from './manage-users/manage-users.component';

const routers: Routes =[
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