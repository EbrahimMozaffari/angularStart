import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.sass']
})
export class LifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
