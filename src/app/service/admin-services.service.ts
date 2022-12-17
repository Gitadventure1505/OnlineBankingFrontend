import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Updatestatus } from '../classes/updatestatus';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  isAdmin: any;


  constructor(private _http: HttpClient, private router: Router) { }


  public isAdminFun(): boolean {
    this.isAdmin = localStorage.getItem('isAdmin');
    console.log(localStorage.getItem('isAdmin'))
    console.log(localStorage.getItem('name'))
    console.log(this.isAdmin + 'inside isAdminFun');

    if (this.isAdmin == 'True') {
      return true;
    }
    else {
      return false;
    }

  }




}
