import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuthenticated=()=>{
    return JSON.parse(sessionStorage.getItem('isLoggedIn'));
  }
}