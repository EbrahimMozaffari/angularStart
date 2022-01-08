import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserComponent} from "./user/user.component";
import { UsersComponent } from './users/users.component';
import {FormsModule} from "@angular/forms";
import {FormComponent} from "./form/form.component";
import {AttributeComponent} from "./attribute/attribute.component";
import {DirectiveComponent} from "./directive/directive.component";
import {RelationComponent} from "./relation/relation.component";
import { StarComponent } from './star/star.component';
import { DecouplingComponent } from './decoupling/decoupling.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UsertableComponent } from './usertable/usertable.component';
import { IncComponent } from './inc/inc.component';
import { ContentComponent } from './content/content.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    FormComponent,
    AttributeComponent,
    DirectiveComponent,
    RelationComponent,
    StarComponent,
    DecouplingComponent,
    AdduserComponent,
    UsertableComponent,
    IncComponent,
    ContentComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
