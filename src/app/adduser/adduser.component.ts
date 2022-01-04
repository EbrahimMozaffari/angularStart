import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {user} from "../app-interface";


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.sass']
})
export class AdduserComponent implements OnInit {
  users:user[] = [
    {email:'a@ddd.com',password:'123',address:'Tehran'},
    {email:'b@ffd.com',password:'dfdf',address:'ghazgholangabad'},
    {email:'c@gg.com',password:'646565',address:'Kalekadoo'},
    {email:'g@www.com',password:'12jhgj3',address:'Markazi'}
  ]

  @Output() onAddUserClicked = new EventEmitter<user[]>();

  constructor() { }

  ngOnInit(): void {
    this.onAddUserClicked.emit(this.users)
  }

  public onAddUser(email: string, password: string, address: string, e: MouseEvent){
    e.preventDefault();
    let u:user={
      email,
      password,
      address
    }
    this.users.push(u);
    this.onAddUserClicked.emit(this.users)
  }
}
