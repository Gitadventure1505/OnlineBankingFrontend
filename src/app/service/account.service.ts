import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../classes/account';
import { Transaction } from '../classes/transaction';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  getSavingsTransaction(accountNum: number) {
    let urlsaveTransaction: string = "http://localhost:8082/account/getSavingsTransactions?accountNum=" + accountNum;
    return this.http_client.get<Transaction[]>(urlsaveTransaction);
  }



  getPrimaryTransaction(accountNum: number, accountType: string): Observable<Transaction[]> {
    let urlprimeTransaction: string = "http://localhost:8082/account/getTransactions?accountNum=" + accountNum + "&accountType=" + accountType
    return this.http_client.get<Transaction[]>(urlprimeTransaction);
  }


  url: string = "http://localhost:8082/account/openaccount"
  public accountNoToView!: number;
  public accountTypeToView!: string;
  public savingsAccountNoToView!: number;
  public accountTypeToViewTransactions!: string;

  constructor(private http_client: HttpClient, private router: Router) {


  }



  public getAccounts(mail: string): Observable<Account[]> {

    return this.http_client.get<Account[]>(this.url);
  }

  public getPrimary(mail: string): Observable<Account> {
    let account_type = 'primary'
    let urlprime: string = "http://localhost:8082/account/getAccountsByMailAndType?customer_mail=" + mail + "&account_type=" + account_type
    return this.http_client.get<Account>(urlprime);
  }


  getSavings(mail: any) {
    let account_type = 'savings'
    let urlsavings: string = "http://localhost:8082/account/getAccountsByMailAndType?customer_mail=" + mail + "&account_type=" + account_type
    return this.http_client.get<Account>(urlsavings);
  }



  createPrimaryAccount(account: Account): Observable<Account> {
    let urlCreatePrimaryAccount = "http://localhost:8082/account/addaccount"
    return this.http_client.post<any>(urlCreatePrimaryAccount, account);
  }




  createprimaryTransaction(transaction: Transaction): Observable<any> {
    let url = 'http://localhost:8082/account/primaryAccountTransaction'

    return this.http_client.post<any>(url, transaction)


  }


  createsavingsTransaction(transaction: Transaction): Observable<any> {
    let url = 'http://localhost:8082/account/savingsAccountTransaction'

    return this.http_client.post<any>(url, transaction)


  }



}
