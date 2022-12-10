import { ChangeDetectionStrategy, Component, Inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],


})

@Injectable({
  providedIn: "root"
})
export class HeaderComponent implements OnInit {

  name: string = '';
  loggedInStatus: string = '';
  count: Number = 1;
  contactNumber: string = '';
  loggedInBoolean: boolean = false;


  constructor(private regSer: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.contactNumber = localStorage.getItem("contactNumber")!;

    if (this.regSer.isLoggedIn()) {
      this.loggedInStatus = 'Log out';
    }
    else {
      this.loggedInStatus = 'Log in';
    }


    this.loggedInBoolean = this.regSer.isLoggedIn();





  }

  logOut() {
    this.regSer.signOut();
  }


  navigateHome() {

    if (this.regSer.isAdminFun()) {
      this.router.navigate(['/adminhome']);
    }
    else {
      this.router.navigate(['/home']);
    }

  }





}













