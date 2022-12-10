import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  isAdmin: string | undefined;
  //private messageSource = new BehaviorSubject('default message');
  //public currentMessageSubscriber = this.messageSource.asObservable();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    observe: 'response' as 'response'
  };


  constructor(private _http: HttpClient, private router: Router) {

  }

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8082/user/login", user, this.httpOptions)

  }


  public RegisterUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8082/user/signup", user)
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  signOut() {
    this.router.navigate(['']);
    localStorage.clear();

  }

  public isAdminFun(): boolean {
    return !!localStorage.getItem('isAdmin');

  }





}
