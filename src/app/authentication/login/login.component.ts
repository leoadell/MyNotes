import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email: string;
  password: string;
  error: string;
  constructor(
    private _fireAuth: AngularFireAuth,
    private _router: Router,
    private _auth: AuthService,
  ) { }

  ngOnInit() {

  }

  login = (form: NgForm) => {
    this._fireAuth.auth
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
          form.reset();
          this._auth.setSession(true);
          this._router.navigate(['/dashboard']);
        }
      )
      .catch(err => this.error = err.message);
  }

}
