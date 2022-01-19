import {Injectable} from "@angular/core";
// import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn:'root'
})

export class LoggingService{
  public title ="this is title from service";
  // constructor(private http :HttpClient) {
  // }
  constructor() {
  }
  public log(message:string){
    console.log(message);
  }
}
