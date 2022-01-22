import {
  AfterViewInit,
  Component,
  ElementRef, Inject, OnChanges,
  OnInit, Optional, QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {IncComponent} from "./inc/inc.component";
import {IUser} from "./app-interface";
import {Event} from "@angular/router";
import {MyCompanyService} from "./my-company.service";
import { DEVICE_NAME_TOKEN} from "./app.module";
// import {MYCOMPANY_SERVICE_TOKEN} from "./app.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  //encapsulation:ViewEncapsulation.None // استایل رو توی کل برنمه اجرا میکنه
})
export class AppComponent implements OnInit, AfterViewInit,OnChanges {
  //@ViewChild('par',{static:true,read:ElementRef}) par:ElementRef ;
  @ViewChild(IncComponent, {static: true, read: IncComponent}) incComp: IncComponent | undefined;
  @ViewChildren(IncComponent, {read: IncComponent}) inComp1: QueryList<IncComponent> | undefined;
  @ViewChild('par') par: ElementRef | undefined ;

  // constructor(private renderer: Renderer2) {
  // }
  // constructor(@Inject(MYCOMPANY_SERVICE_TOKEN) private MyCompanyService:MyCompanyService) {
  //
  // }


  // constructor(@Inject(DEVICE_NAME_TOKEN) private deviceName:string) {
  //   console.log("deviceName",deviceName)
  //
  // }

  constructor(@Optional() private myCompanyService:MyCompanyService) {

  }


  color:string = 'red';
  images:string[]= ['/assets/images/01.jpg','/assets/images/02.png','/assets/images/03.png']

  title = 'my-first-project';
  name: string = 'Ebrahim';
  isEnabled: boolean = true;
  twoWayBinding: string = 'sss';
  styles = {};
  isCorrect: boolean = true;
  isModified: boolean = false;
  isCancelled: boolean = true;
  classes = {};
  user:IUser={
    name:'ebrahim',
    age:36
  }
  users:IUser[]=[
    {
      name:'ebrahim',
      age:36
    },
    {
      name:'feri',
      age:33
    },
    {
      name:'gholi',
      age:30
    },
    {
      name:'koli',
      age:39
    }
  ]

  userSelected:IUser|undefined;
  // public onInputChanged(e: Event) {
  //   //console.log(e)
  //   this.name = (<HTMLInputElement>e.target).value;
  // }


  public ngOnInit(): void {
//this.renderer.setStyle(this.par.nativeElement,"color",'purple')
    //console.log(this.incComp)
    this.incComp?.increment()
    this.styles = {
      'font-size': this.isCorrect ? '2rem' : '4rem',
      'color': 'green'
    };
    this.classes = {
      'big-font-size': !this.isModified,
      'cancelled-color': this.isCancelled
    }
  }

  public ngAfterViewInit() {
    if(this.inComp1){
      this.inComp1.forEach((comp)=>{
        comp.increment()
      })
    }

    //this.par.nativeElement.innerHTML ='123456';
  }

  public onContentChange(){
// @ts-ignore
    //yademon bashe in kar ro hichvaght anjam nadim faghat ba renderer2 taghir bedim
    this.par?.nativeElement.textContent = '123456'
  }

  public onSelectChange(){
    console.log(this.userSelected)
    //console.log(user)
  }
  ngOnChanges(){
    console.log("ngOnChanges  ",this.userSelected)
  }
}
