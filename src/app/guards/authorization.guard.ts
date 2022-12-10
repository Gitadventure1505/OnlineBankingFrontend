import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { RegistrationService } from '../registration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {


  constructor(private register: RegistrationService, private router: Router,
    private toastr: ToastrService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;

    console.log(this.register.isAdminFun());
    if (this.register.isAdminFun()) {
      return true;
    }
    else {
      this.router.navigate(['/home']);
      this.toastr.error('Only Admin can Access the Page', 'Admin Access Required');
      return false;

    }

  }

}
