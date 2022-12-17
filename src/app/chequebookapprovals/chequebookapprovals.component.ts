import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Account } from '../classes/account';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-chequebookapprovals',
  templateUrl: './chequebookapprovals.component.html',
  styleUrls: ['./chequebookapprovals.component.css']
})
export class ChequebookapprovalsComponent implements OnInit {

  accounts: Account[] = [];
  msg!: string;


  constructor(private accountservice: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.accountservice.getUsersRequestedForChequebook().subscribe(data => {

      this.accounts = data;
      if (this.accounts.length === 0) {
        this.msg = "No Users requested for Cheque book"
      }
    })


  }


  generatecheque(accountNum: number) {
    this.accountservice.generateNewChequeBook(accountNum).subscribe(data => {
      this.toastr.success(data.message);

    })

    setTimeout(() => {
      this.ngOnInit();
      window.location.reload();

    }, 2000);



  }

}
