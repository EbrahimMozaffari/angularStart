import {Component} from "@angular/core";

@Component({
  selector:'app-relation',
  templateUrl:'relation.component.html'
})
export class RelationComponent{
ratings:number[]=[3.5,4.5,1,2.5,5,4]

  public onStarClicked(rating:number){
    console.log(rating)
  }
}
