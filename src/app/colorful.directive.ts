import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorful]'
})
export class ColorfulDirective {
  availableColor :string[] = ['#B13140','#F5919D','#CE5765','#8D1624','#63000C','#FFFF00','#FFFF5F','#FFFF32','#DEDE00','#ADAD00','#0A77B8','#529DC9','#2E88BD','#065B8D','#04476E'];
  constructor() { }

  @HostBinding('style.color') color : string | undefined;
  @HostBinding('style.border-color') borderColor:string | undefined;

  @HostListener('keydown') newColor(){
    const randomColorIndex = Math.floor(Math.random()* this.availableColor.length)
    this.color = this.borderColor = this.availableColor[randomColorIndex]
  }
}
