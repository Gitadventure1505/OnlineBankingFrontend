import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ResponseData } from '../classes/response-data';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  responsedata = new ResponseData();
  token: String = '';
  isAdmin: string = '';

  @ViewChild('name') nameKey!: ElementRef;
  //this.nameKey.nativeElement.value




  constructor(private _service: RegistrationService, private _router: Router,
    private toastr: ToastrService) {


  }
  @Input() emailFormControl: any
  @Input() emailFormControlpass: any
  ngOnInit(): void {
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    this.emailFormControlpass = new FormControl('', [Validators.required]);

  }


  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received rn");
        console.log(data);
        console.log(data.body.token);
        localStorage.setItem("token", data.body.token);
        localStorage.setItem("name", data.body.name);
        localStorage.setItem("contactNumber", data.body.contactNumber);
        localStorage.setItem("isAdmin", data.body.isAdmin);
        localStorage.setItem("mail", data.body.mail);
        this.isAdmin = data.body.isAdmin;


        if (this._service.isAdminFun()) {
          this._router.navigate(['/adminhome']);
        }
        else {
          this._router.navigate(['/home']);
        }

        this.toastr.success('Welcome ' + data.body.name, 'Login Successful!')


      },

      error => {
        console.log("Exception occured rn");
        console.log(error);
        console.log(error.error.message);
        this.msg = "Something went wrong!! check the servers";
        this.toastr.error(error.error.message, 'Error in Login!')

      }








    )

  }

}
