import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn()
  {
    this.authService.signIn().then(
      () => {
        this.authStatus = this.authService.isAuth;
      }
    )
  }

  onSignOut()
  {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
