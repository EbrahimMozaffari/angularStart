import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ICarouselContext} from "./app-interface";

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit{

  context: ICarouselContext | null=null;
  index:number = 0;

  constructor(private templateRef:TemplateRef<ICarouselContext>,
              private viewContainerRef:ViewContainerRef ) { }

  @Input('appCarouselFrom') images: string[] =[];

  timer: any;

  @Input('appCarouselAutoplay')
    set autoplay(val:string){
    val == 'No' ? this.clearAutoPlay():this.playAutoPlay()
  }

  public ngOnInit(){

    this.context = {
      $implicit:this.images[0],
      controller:{
        next:()=>this.next(),
        prev:()=>this.prev()
      }
    }

    this.viewContainerRef.createEmbeddedView(this.templateRef,this.context)
  }

  public next(){
    console.log('next')
    this.index++;
    if(this.index >= this.images.length){
      this.index = 0;
    }
    // @ts-ignore
    this.context?.$implicit = this.images[this.index];
  }
  public prev(){
    console.log('prev')
  this.index--;
  if(this.index<0){
    this.index = this.images.length -1;
  }
  // @ts-ignore
    this.context?.$implicit = this.images[this.index]
  }

  public playAutoPlay(){
    this.timer = setInterval(()=>{
      this.next();
    },1000)
  }
  public clearAutoPlay(){
    clearInterval(this.timer)
  }
}
