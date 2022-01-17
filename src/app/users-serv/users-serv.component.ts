import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-users-serv',
  templateUrl: './users-serv.component.html',
  styleUrls: ['./users-serv.component.sass'],

})
export class UsersServComponent implements OnInit {

  constructor(private loggingService:LoggingService) { }

  ngOnInit(): void {
  }

}
