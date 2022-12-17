import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  depositmoney() {
    this.router.navigate(['/depositcash']);

  }

  Withdrawmoney() {
    this.router.navigate(['/withdrawcash']);

  }


  transfermoney() {
    this.router.navigate(['/transfercash']);
  }

}
