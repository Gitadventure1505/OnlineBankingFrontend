import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { Transaction } from '../classes/transaction';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-withdrawcash',
  templateUrl: './withdrawcash.component.html',
  styleUrls: ['./withdrawcash.component.css']
})
export class WithdrawcashComponent implements OnInit {



  constructor(private accountService: AccountService,
    private toastr: ToastrService,
    private alladminservice: AdminService,
    private router: Router,) { }


  @Input() transferamountFormControl: any
  @Input() AccountNumberFormControl: any
  @ViewChild('accounttypetemplatevariable') accountType!: ElementRef;




  msg: any = '';
  transaction = new Transaction();
  mail: any = '';
  progressBar: boolean = false;
  successMsg: boolean = false;


  primaryAvailable: boolean = true
  savingsAvailable: boolean = true
  public selectedAccountType: any;


  primaryAccountNum: number = 0
  savingsAccountNum: number = 0
  AccountNum: number = 0;



  public currentBalance: number | undefined;
  public primaryBalance: number | undefined;
  public savingsBalance: number | undefined;







  ngOnInit(): void {
    this.transferamountFormControl = new FormControl('', [Validators.required]);
    this.AccountNumberFormControl = new FormControl('', [Validators.required]);

    this.mail = localStorage.getItem("mail");

    //Getting primary account details
    this.accountService.getPrimary(this.mail).subscribe(data => {

      this.primaryAccountNum = data.accountNo;
      this.primaryBalance = data.balance;


      if (data.accountNo == 0) {

        console.log("empty");
        this.primaryAvailable = false;

      }


    })



    //Getting savings account details
    this.accountService.getSavings(this.mail).subscribe(data => {

      this.savingsAccountNum = data.accountNo;
      this.savingsBalance = data.balance;

      if (data.accountNo == 0) {

        console.log("empty");
        this.savingsAvailable = false;

      }

    })

  }


  onSelected() {
    this.selectedAccountType = this.accountType.nativeElement.value;
    if (this.selectedAccountType == 'primary') {
      this.AccountNum = this.primaryAccountNum;
      this.currentBalance = this.primaryBalance;

    }
    else if (this.selectedAccountType == 'savings') {
      this.AccountNum = this.savingsAccountNum;
      this.currentBalance = this.savingsBalance;
    }
    else {
      this.AccountNum = 0;
    }
  }

  withdrawmoney() {
    this.progressBar = true;
    this.transaction.transactiontype = 'withdraw';
    this.transaction.customermail = this.mail;
    this.transaction.accountnum = this.AccountNum;
    console.log(this.transaction);


    if (this.selectedAccountType == 'savings' && this.transaction.transferamount !== undefined) {
      this.accountService.createsavingsTransaction(this.transaction).subscribe(data => {

        this.msg = data.message;
        console.log(this.msg)

        setTimeout(() => {
          this.toastr.info(this.msg);
          this.progressBar = false;
          this.successMsg = true;

        }, 2500);

        setTimeout(() => {
          this.router.navigate(['/home'])

        }, 6000);


      })

    }
    else if (this.selectedAccountType == 'primary' && this.transaction.transferamount !== undefined) {
      this.accountService.createprimaryTransaction(this.transaction).subscribe(data => {

        this.msg = data.message;

        //this.msg.message;
        console.log(this.msg)
        console.log(data)




        setTimeout(() => {
          this.toastr.info(this.msg);
          this.progressBar = false;
          this.successMsg = true;

        }, 2500);

        setTimeout(() => {
          this.router.navigate(['/home'])

        }, 6000);



      })

    }
    else {
      this.msg = 'transaction request not sent/unsuccessful';
      this.toastr.error('fill all mandatory fields');
      console.log('transaction request not sent/unsuccessful');
      this.progressBar = false;
    }




  }



}
