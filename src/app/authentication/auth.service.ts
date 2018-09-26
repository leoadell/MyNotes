import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _router: Router,
    private _fireAuth: AngularFireAuth

  ) { }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time

    // alert( JSON.parse(sessionStorage.getItem('isLoggedIn')));
    // const expiresAt = JSON.parse(localStorage.getItem('expires_at'));    
    // return new Date().getTime() < expiresAt;
    return JSON.parse(localStorage.getItem('isLoggedIn'));
  }

  /*
    public handleAuthentication(): void {
      this._fireAuth.
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          window.location.hash = '';
          this.setSession(authResult);
          this.router.navigate(['/dashboard']);
        } else if (err) {
          this.router.navigate(['/']);
          console.log(err);
        }
      });
    }
  */
  public setSession(authResult): void {
    // Set the time that the Access Token will expire at
    localStorage.setItem('isLoggedIn', authResult);
  /* const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);*/
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('isLoggedIn');
    // Go back to the home route
    this._router.navigate(['/']);
    /**
    this._fireAuth.auth.signOut()
      .then(() => {
        sessionStorage.clear();
        this._router.navigate(['/login']);
      }); */
  }




}
