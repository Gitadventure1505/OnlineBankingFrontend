import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Updatestatus } from '../classes/updatestatus';
import { User } from '../user';

@Component({
  selector: 'app-adminapproval',
  templateUrl: './adminapproval.component.html',
  styleUrls: ['./adminapproval.component.css']
})
export class AdminapprovalComponent implements OnInit {

  statusbool: boolean = false;
  public getAllUsers!: User[];
  updStat = new Updatestatus();
  msg!: string;


  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getNewUsers().subscribe(
      data => {
        this.getAllUsers = data;
        console.log("list of users received rn");
        console.log(data);
        if (this.getAllUsers.length === 0) {
          this.msg = 'No Users waiting for Approval!!'
        }


      },
      error => {

        console.log("Exception occured while getting users list rn");

      },

    )
  }

  approveUser(n: number) {
    this.updStat.id = n;
    this.updStat.status = 'true';
    this.adminService.updateStatus(this.updStat).subscribe(
      data => {
        console.log("response received rn");
        console.log(data);
        console.log("Froy");
      });

    this.ngOnInit();
    window.location.reload();



  }
}
