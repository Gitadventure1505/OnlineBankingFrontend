import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from '../registration.service';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private register: RegistrationService, private router: Router,
    private toastr: ToastrService) { }

  canActivate(): boolean {
    console.log(this.register.isLoggedIn());
    if (this.register.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['']);
      this.toastr.error('Login to the application to Use', 'Login Required');
      return false;

    }
  }






}
