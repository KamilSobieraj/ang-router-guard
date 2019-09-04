import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private userLoginStatus$ = new BehaviorSubject<boolean>(false);

  setUserLoginStatus(value) {
    this.userLoginStatus$.next(value);
  }
  getUserLoginStatus(): Observable<boolean> {
    return this.userLoginStatus$.asObservable();
  }
  updateUserLoginStatus() {
    this.userLoginStatus$.value ? this.logoutUser() : this.loginUser();
  }
  loginUser() {
    this.setUserLoginStatus(true);
  }
  logoutUser() {
    this.setUserLoginStatus(false);
  }
}
