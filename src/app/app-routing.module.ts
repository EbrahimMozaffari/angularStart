import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersServComponent} from "./users-serv/users-serv.component";
import {AdminComponent} from "./admin/admin.component";
import {ClientComponent} from "./client/client.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {UserServComponent} from "./user-serv/user-serv.component";
import {EditusercomponentComponent} from "./editusercomponent/editusercomponent.component";


const routes:Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'users',component:UsersServComponent},
  {path:'user/:id',component:UserServComponent,children:[
      {path:'edit',component:EditusercomponentComponent},
    ]},
  //{path:'user/:id/edit',component:EditusercomponentComponent},
  {path:'admin',component:AdminComponent},
  {path:'client',component:ClientComponent},
  {path:'not-found',component:NotfoundComponent},
  {path:'**',redirectTo:'not-found'},
] ;

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}


