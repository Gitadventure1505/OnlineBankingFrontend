import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { User } from '../user';

@Component({
  selector: 'app-addaccountuserslist',
  templateUrl: './addaccountuserslist.component.html',
  styleUrls: ['./addaccountuserslist.component.css']
})
export class AddaccountuserslistComponent implements OnInit {

  msg!: string;
  public getExistingUsers!: User[];
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getExistingUsers().subscribe(
      data => {
        this.getExistingUsers = data;
        console.log("list of users received rn");
        console.log(data);
        if (this.getExistingUsers.length === 0) {
          this.msg = 'No Users are available'

        }

      })
  }


  addAccount(n: number) {
    console.log(n + 43);

  }


  addViewAccount(mail: string) {
    console.log(mail);
    this.router.navigate(['/account']);
  }
}
