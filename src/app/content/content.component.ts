import {AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit,AfterContentInit,AfterContentChecked {

  @ContentChild('par',{static:true}) par : ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {

      console.log(this.par?.nativeElement.textContent)

  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit",this.par?.nativeElement.textContent)
  }
ngAfterContentChecked() {
  console.log("ngAfterContentChecked",this.par?.nativeElement.textContent)
}

}
