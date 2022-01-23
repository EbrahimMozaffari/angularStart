import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../logging.service";
import {MyCompanyService} from "../my-company.service";
import {UserService} from "../user.service";
import {SUser} from "../app-interface";

@Component({
  selector: 'app-users-serv',
  templateUrl: './users-serv.component.html',
  styleUrls: ['./users-serv.component.sass'],
  providers:[MyCompanyService]


})
export class UsersServComponent implements OnInit {
users:SUser[]=[];
  // constructor(private loggingService:LoggingService) { }

  // constructor(private myCompanyService:MyCompanyService) {
  // }
constructor(private userService:UserService) {

}
  ngOnInit(): void {
  this.users = this.userService.users;
  }

}
