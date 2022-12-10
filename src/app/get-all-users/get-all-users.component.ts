import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { AdminService } from '../admin.service';
import { User } from '../user';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {


  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;



  public getAllUsers!: User[];
  constructor(private adminService: AdminService) { }

  ngOnInit() {

    this.adminService.getAllUsers().subscribe(
      data => {
        this.getAllUsers = data;
        console.log("list of users received rn");
        console.log(data);

      },
      error => {

        console.log("Exception occured while getting users list rn");

      },



    )

  }

  statusUpdate() {
    // this.checked = true;
    console.log(this.checked);

    //console.log("youtube");
  }


}
