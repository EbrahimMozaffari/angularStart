import {Component, OnInit, Self, SkipSelf} from '@angular/core';
import {LoggingService} from "../logging.service";
import {MyCompanyService} from "../my-company.service";
import {FUser, user} from "../app-interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-serv',
  templateUrl: './user-serv.component.html',
  styleUrls: ['./user-serv.component.sass'],
  //providers:[MyCompanyService]
})
export class UserServComponent implements OnInit {
  selectedId: number | undefined;
  selectedUser:FUser| undefined;
  users:FUser[] = [
    {id:1,name:'Ebrahim'},
    {id:2,name:'gholi'},
    {id:3,name:'feri'},
    {id:4,name:'ghazgholang'},
  ]

  // constructor(private loggingService:LoggingService) { }

  // constructor(@Self() private myCompanyService: MyCompanyService) {
  // }

  // constructor(@SkipSelf() private myCompanyService: MyCompanyService) {
  // }
  constructor(private route:ActivatedRoute) {
  this.selectedId = +this.route.snapshot.params['id'];
  if(this.selectedId){

    // @ts-ignore
    this.selectedUser = this.users.find(user=>user.id === this.selectedId)
  }
    console.log(this.selectedId)
    console.log(this.selectedUser)

  }

  ngOnInit(): void {

  }

}
