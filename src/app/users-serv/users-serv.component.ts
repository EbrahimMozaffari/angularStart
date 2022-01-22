import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../logging.service";
import {MyCompanyService} from "../my-company.service";

@Component({
  selector: 'app-users-serv',
  templateUrl: './users-serv.component.html',
  styleUrls: ['./users-serv.component.sass'],
  providers:[MyCompanyService]


})
export class UsersServComponent implements OnInit {

  // constructor(private loggingService:LoggingService) { }

  constructor(private myCompanyService:MyCompanyService) {
  }

  ngOnInit(): void {
  }

}
