import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg: string = '';

  constructor(private _service: RegistrationService, private _router: Router, private toastr: ToastrService) { }

  @Input() registerFormControl: any
  @Input() registerFormControlemail: any
  @Input() registerFormControlMobile: any
  @Input() registerFormControlPass: any






  ngOnInit(): void {
    this.registerFormControl = new FormControl('', [Validators.required]);
    this.registerFormControlemail = new FormControl('', [Validators.required, Validators.email]);
    this.registerFormControlMobile = new FormControl('', [Validators.required]);
    this.registerFormControlPass = new FormControl('', [Validators.required]);





  }


  RegisterUser() {
    this._service.RegisterUserFromRemote(this.user).subscribe(
      data => {
        console.log("User created successfully");
        this._router.navigate(['/']);
        this.toastr.success("User created Successfully", "Welcome")



      },
      error => {
        console.log(error);
        console.log("Exception occured User not registered");
        this.msg = error.error.message;
        this.toastr.error(error.error.message, "Registration fail!");
      })
  }

}
