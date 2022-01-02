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
    StarComponent
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
