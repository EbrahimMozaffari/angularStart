import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'my-first-project';
  name:string  ='Ebrahim';
  isEnabled:boolean = true;
  twoWayBinding:string = 'sss';
  styles={};
  isCorrect:boolean=true;
  isModified:boolean=false;
  isCancelled:boolean=true;
  classes={};
  public onInputChanged (e:Event){
    //console.log(e)
    this.name =(<HTMLInputElement>e.target).value;
  }
  ngOnInit() :void{
  this.styles={
    'font-size': this.isCorrect ?'2rem' : '4rem',
    'color':'green'
  };
  this.classes={
    'big-font-size':!this.isModified,
     'cancelled-color':this.isCancelled
    }
  }
}
