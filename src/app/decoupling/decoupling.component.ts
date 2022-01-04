import { Component, OnInit } from '@angular/core';
import {user} from "../app-interface";


@Component({
  selector: 'app-decoupling',
  templateUrl: './decoupling.component.html',
  styleUrls: ['./decoupling.component.sass']
})
export class DecouplingComponent implements OnInit {

  users:user[] = []
  public userAdded(users:user[]){
    this.users = users;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
