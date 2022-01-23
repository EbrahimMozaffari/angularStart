import {Component, OnInit, Self, SkipSelf} from '@angular/core';
import {LoggingService} from "../logging.service";
import {MyCompanyService} from "../my-company.service";
import {FUser, SUser, user} from "../app-interface";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-serv',
  templateUrl: './user-serv.component.html',
  styleUrls: ['./user-serv.component.sass'],
  //providers:[MyCompanyService]
})
export class UserServComponent implements OnInit {
  isUserFound:boolean=false;
  selectedId: number | undefined;
  editMode: boolean = false;
  selectedUser: SUser | undefined;
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
  constructor(private route:ActivatedRoute,private userService:UserService,private router:Router) {


  }

  ngOnInit(): void {
    this.selectedId = +this.route.snapshot.params['id'];
    if(this.selectedId){

      // @ts-ignore
      this.selectedUser = this.userService.users.find(user=>user.id === this.selectedId)
      if(!this.selectedUser){
        this.router.navigate(['/users'])
        this.isUserFound=false;
      }else{
        this.isUserFound=true;
      }
    }
    // console.log(this.selectedId)
    // console.log(this.selectedUser)

    this.route.params.subscribe((params:Params)=>{
      this.selectedUser = this.userService.users.find(user=>user.id === +params['id'])
    })
  }
  public onEditUser(){
    // @ts-ignore
    //this.router.navigate(['/user',this.selectedUser.id,'edit'],{queryParams:{editMode:'1',isAdmin:'1'},fragment:'title1'},)
    this.router.navigate(['./edit'],{relativeTo:this.route},{queryParams:{editMode:'1',isAdmin:'1'},fragment:'title1'},)
    this.editMode =true;

  }
}
