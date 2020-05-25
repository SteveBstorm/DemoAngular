import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from './models/user.model';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit, OnDestroy {

  users: User[];

  userSubscription : Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.userSubject.subscribe(
      (usersFromUserSubject: User[]) => {
        this.users = usersFromUserSubject;
      }
    );
    this.userService.emitUser();
  }

  ngOnDestroy() : void {
    this.userSubscription.unsubscribe();
  }

}
