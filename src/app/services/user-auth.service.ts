import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
 private authSubject:BehaviorSubject<boolean>;
  constructor() { 
    this.authSubject = new BehaviorSubject<boolean>(false);
  }

  Login(){
    localStorage.setItem('token','hksiiej844')

    this.authSubject.next(true);
  }
  Logout(){
    localStorage.removeItem('token')

    this.authSubject.next(false);
  }
  getToken():any{
    return localStorage.getItem('token')?localStorage.getItem('token'):null
  }
  getUserLogged():boolean{
    return localStorage.getItem('token')?true:false;
  }
  getAuthSubject(){
    return this.authSubject
  }

}
