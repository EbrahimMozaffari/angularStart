import {
  AfterViewInit,
  Component,
  ElementRef, OnChanges,
  OnInit, QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {IncComponent} from "./inc/inc.component";
import {IUser} from "./app-interface";
import {Event} from "@angular/router";

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

  constructor(private renderer: Renderer2) {

  }

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
