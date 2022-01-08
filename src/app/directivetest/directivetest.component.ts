import {Component, Input, OnChanges, OnInit, QueryList, SimpleChanges} from '@angular/core';
import {IUser} from "../app-interface";

@Component({
  selector: 'app-directivetest',
  templateUrl: './directivetest.component.html',
  styleUrls: ['./directivetest.component.sass']
})
export class DirectiveComponent implements OnInit,OnChanges {

  private _user: IUser | undefined;
  //اگر بر روی یک فیلد بخواهیم کار انجام بدهیم از این روش استفاده میکنیم در غیر اینصورت از ngOnChanges استفاده میکنیم
  @Input()
    set user(user:IUser){
    this._user = user;
    this.counter++;
    }
    get user():IUser{
      return <IUser>this._user;
    }

//@Input() user: IUser | undefined;
counter:number=0;

  constructor() { }

  ngOnInit(): void {
    console.log(this._user)
  }
  ngOnChanges(changes: SimpleChanges) {
    // this._user = this.user;
    // this.counter++;
  }

}
