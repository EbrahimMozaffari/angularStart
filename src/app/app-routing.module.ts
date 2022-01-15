import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersServComponent} from "./users-serv/users-serv.component";


const routes:Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'users',component:UsersServComponent},
] ;

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}


