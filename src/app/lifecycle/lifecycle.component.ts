import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef, Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.sass']
})
export class LifecycleComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,OnDestroy
{
  @ViewChild('par2',{static:true}) par2 :ElementRef | undefined;
  @ContentChild("par",{static:true}) par : ElementRef | undefined;
  @Input() var1:any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges):void {
    throw new Error('method not implement')
  }

  ngOnInit(): void {
    console.log('ngOnInit',this.par?.nativeElement.textContent)
  }

  ngDoCheck():void {
    console.log('ngDoCheck was caled')
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit',this.par?.nativeElement.textContent)
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked',this.par?.nativeElement.textContent)
  }
  ngAfterViewInit():void {
    console.log('ngAfterViewInit',this.par2?.nativeElement.textContent)
  }
  ngAfterViewChecked():void {
    console.log('ngAfterViewChecked',this.par2?.nativeElement.textContent)
  }
  ngOnDestroy():void {
    console.log("component destroyed")
  }

  public onChangedViewChild(){
    // @ts-ignore
    this.par2?.nativeElement.textContent = 'viewChildChanged'
  }
}
