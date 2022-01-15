import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(private elementRef:ElementRef,private renderer :Renderer2) { }

  @Input('appAppHighlight') highlightColor : string ='yellow';

  @HostListener('mouseenter') onMouseEnter(){
    this.changeBackgroundColor(this.highlightColor)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.changeBackgroundColor('transparent')
  }

  private changeBackgroundColor(color:string){
    //this.elementRef.nativeElement.style.backgroundColor = color // hichvaght az in ravesh estefade nakonid
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color',color);
  }
}
