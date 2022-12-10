import { Component, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineBankingAngular';
  // @HostListener("window:onbeforeunload", ['$event'])
  //clearLocalStorage(event: any) {
  //localStorage.clear();



}


fromEvent(window, 'popstate')
  .subscribe((e) => {
    console.log(e, 'back button');
    localStorage.clear();
  });

 // window.addEventListener("beforeunload", function (e) {
// localStorage.clear();
 // }, false);

