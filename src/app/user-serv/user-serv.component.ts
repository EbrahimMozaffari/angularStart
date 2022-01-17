import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-user-serv',
  templateUrl: './user-serv.component.html',
  styleUrls: ['./user-serv.component.sass'],
  providers:[LoggingService],
})
export class UserServComponent implements OnInit {

  constructor(private loggingService:LoggingService) { }

  ngOnInit(): void {
  }

}
