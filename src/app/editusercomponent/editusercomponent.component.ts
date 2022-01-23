import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {SUser} from "../app-interface";

@Component({
  selector: 'app-editusercomponent',
  templateUrl: './editusercomponent.component.html',
  styleUrls: ['./editusercomponent.component.sass']
})
export class EditusercomponentComponent implements OnInit {
  //@ts-ignore
  user: SUser = {id: 0, name: '', email: ''};


  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    //@ts-ignore
    this.user = this.userService.users.find(user => user.id === +this.route.parent.snapshot.params['id'])
    console.log(this.user)
    if (!this.user) {
      this.router.navigate(['/users'])
    }
  }

  onSaveChanges(name: string, email: string) {
    this.user.name = name;
    this.user.email = email;
    this.router.navigate(['/users'])
  }

}
