import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnInit {

  @Input() rating:number=4.5;
  width:number=90;
  @Output() starClicked = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
    this.width = this.rating * 90/5;
  }

  public onClick(){
    this.starClicked.emit(this.rating)
  }
}
