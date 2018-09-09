import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from './authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  email: string;

  constructor(
    private _fireAuth: AngularFireAuth,
    private _router: Router,
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
    this._fireAuth.user.subscribe(user => {
      this.email = user.email;
    })
  }


  logout() {
    this._authService.logout();
  }
}
