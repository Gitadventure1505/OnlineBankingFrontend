import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Account } from '../classes/account';
import { Transaction } from '../classes/transaction';
import { AccountService } from '../service/account.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  TransactionsList!: Transaction[]
  accountNum!: number;
  accountType!: string;


  constructor(private router: Router, private accountService: AccountService,
    private alladminservice: AdminService, private location: Location) { }

  ngOnInit(): void {


    if (this.accountService.accountTypeToViewTransactions == 'primary') {
      this.accountType = this.accountService.accountTypeToView;
      this.accountNum = this.accountService.accountNoToView;
      this.accountService.getPrimaryTransaction(this.accountNum, this.accountType).subscribe(data => {
        this.TransactionsList = data;
      });

    }
    else {

      //this.accountType = this.accountService.accountTypeToView;
      this.accountNum = this.accountService.savingsAccountNoToView;
      this.accountService.getSavingsTransaction(this.accountNum).subscribe(data => {
        this.TransactionsList = data;
      });

    }

  }

  back(): void {
    this.router.navigate(['/account']);
  }

}
