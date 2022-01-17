import {Component, OnInit} from '@angular/core';
import {LoggingService} from "../logging.service";
import {Event} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers:[LoggingService],
})
export class HomeComponent implements OnInit {

  constructor(private loggingService: LoggingService) {
  }

  ngOnInit(): void {

  }

  public log() {
    this.loggingService.log('this is home component');
  }
  // public onChange(e :Event){
  //   this.loggingService.title =<HTMLInputElement>e.target).value
  //   //this.loggingService.title = (e.target as HTMLInputElement).value
  // }
  public onChange(e:KeyboardEvent){
    //this.loggingService.title =<HTMLInputElement>e.target).value;
    //const target = e.target as HTMLTextAreaElement;
    this.loggingService.title = (e.target as HTMLInputElement).value
    //this.loggingService.title = `Welcome ${(<HTMLInputElement>e.target).value}`;
    //this.userName =(<HTMLInputElement>e.target).value
  }
}
