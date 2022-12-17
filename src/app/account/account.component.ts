import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { Account } from '../classes/account';
import { Transaction } from '../classes/transaction';
import { AccountService } from '../service/account.service';
import { AdminServicesService } from '../service/admin-services.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  mail: any = '';


  ram: any = '';
  primeExists: boolean = true;
  savingsExists: boolean = true;

  account = new Account();
  savingsaccount = new Account();


  isAdmin: boolean = false;





  constructor(private accountService: AccountService,
    private adminservice: AdminServicesService,
    private alladminservice: AdminService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    //Assign User Mail To View acc based on the Authorization
    if (this.adminservice.isAdminFun()) {
      this.mail = this.alladminservice.UserMailToView;
    }
    else {
      this.mail = localStorage.getItem("mail");
    }

    this.accountService.getPrimary(this.mail).subscribe(data => {

      console.log(data);
      this.account = data;
      this.accountService.accountNoToView = this.account.accountNo;
      this.accountService.accountTypeToView = this.account.accountType;

      if (this.account.accountNo == 0) {

        console.log("empty");
        this.primeExists = false;

      }

      //check if isAdmin
      this.isAdmin = this.adminservice.isAdminFun();

    })



    this.accountService.getSavings(this.mail).subscribe(data => {

      console.log(data);
      this.savingsaccount = data;
      this.accountService.savingsAccountNoToView = this.savingsaccount.accountNo;
      //this.accountService.accountTypeToView = this.account.accountType;

      if (this.savingsaccount.accountNo == 0) {

        console.log("empty");
        this.savingsExists = false;

      }

      //check if isAdmin
      this.isAdmin = this.adminservice.isAdminFun();

    })





  }

  viewTransactions(accountType: string) {
    this.accountService.accountTypeToViewTransactions = accountType;
    this.router.navigate(['/transactionHistory']);
  }




  createPrimaryAccount(accountType: string) {
    let accountnew = new Account();
    accountnew.accountType = accountType;
    accountnew.customerMail = this.mail;
    accountnew.balance = 1000;

    this.accountService.createPrimaryAccount(accountnew).subscribe(data => {
      console.log(data);





    })

    this.router.navigate(['/addaccountlist']);
    this.toastr.success(accountType + ' account added successfully to this User', 'Successfully added')

  }

  back() {
    if (this.isAdmin) {
      this.router.navigate(['/addaccountlist']);
    }
    else {
      this.router.navigate(['/home']);
    }

  }




}
