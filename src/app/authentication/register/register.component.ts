import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = { email: '', name: '', password: '', id: null };
  error: string;

  constructor(
    private _fireAuth: AngularFireAuth,
    private _router: Router,
    private _store: AngularFirestore
    ) { }

  ngOnInit() {

  }

  register = (form: NgForm) => {
    // Registramos el usuario en fireauth
    this._fireAuth.auth
    .createUserWithEmailAndPassword(this.user.email, this.user.password)
    .then((resp) => {
      console.log(resp);
      form.reset();
      this._store.collection('users')
      .valueChanges()
      .pipe(take(1))
      .subscribe(users => {
        const id = users.length + 1;
        this.user.id = id;
        /* agregamos el usuario a la bd 
         para no perder la referencia
         this._store.collection('users') */
        this._store.collection('users')
          .doc(`${id}`).set(this.user)
          .then(() => {
            this._router.navigate(['/login']);
          });
      });
    })
    .catch(err => this.error = err.message);
  }
}