import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';

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
    private _router: Router
  ) { }

  ngOnInit() {

  } 
  google = () => {
    this._fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(res => {
     this._router.navigate(['/dashboard']);
    })
    .catch(err => this.error = err.message);
  }

  login = (form: NgForm) => {
    this._fireAuth.auth
    .signInWithEmailAndPassword(this.email, this.password)
    .then(res => {
      sessionStorage.setItem('isLoggedIn', 'true');
      form.reset();
      this._router.navigate(['/dashboard']);
    })
    .catch(err => this.error = err.message);
  }

}