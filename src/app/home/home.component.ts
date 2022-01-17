import {Component, Inject, OnInit} from '@angular/core';
import {LoggingService} from "../logging.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],

})
export class HomeComponent implements OnInit {

  constructor(private loggingService: LoggingService) {
  }
//,@Inject("API_URL") url:string
  ngOnInit(): void {

  }

  public log() {
    this.loggingService.log('this is home component');
    console.log(this.loggingService.title)
  }
  // public onChange(e :Event){
  //   this.loggingService.title =<HTMLInputElement>e.target).value
  //   //this.loggingService.title = (e.target as HTMLInputElement).value
  // }
  public onChange(e:any){
    //this.loggingService.title =<HTMLInputElement>e.target).value;
    //const target = e.target as HTMLTextAreaElement;
    this.loggingService.title = (e.target as HTMLInputElement).value;
    //this.loggingService.title = `Welcome ${(<HTMLInputElement>e.target).value}`;
    //this.userName =(<HTMLInputElement>e.target).value
  }
}
