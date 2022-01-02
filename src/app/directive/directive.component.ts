import {Component} from "@angular/core";

@Component({
  selector:'app-directive',
  templateUrl:'directive.component.html'
})
export class DirectiveComponent{
  condition:boolean=true;
  users:string[]=['ebrahim','fereshte','kalekkadoo','ghazgholang']
  userDiff:Array<string>=['ebrahim','fereshte','kalekkadoo','ghazgholang']
  userObj:any=[
    { id:1, name:'ebi' },
    { id:2, name:'fereshte' },
    { id:3, name:'kalekkadoo' },
    { id:4, name:'ghazgholang' },
  ]

  public addNewUser():void{
    this.userObj = [
      { id:1, name:'ebi' },
      { id:2, name:'fereshte' },
      { id:3, name:'kalekkadoo' },
      { id:4, name:'ghazgholang' },
      { id:5, name:'hjsghdjgdj' },
    ]
  }
  public trackByFunc(index:number,el:any){
    return el.id
  }
}
