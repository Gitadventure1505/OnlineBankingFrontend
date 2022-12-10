import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../classes/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url: string = "http://localhost:8082/account/openaccount"

  constructor(private http_client: HttpClient, private router: Router) {


  }



  public getAccounts(mail: string): Observable<Account[]> {

    return this.http_client.get<Account[]>(this.url);
  }

}
