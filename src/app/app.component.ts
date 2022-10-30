import { Component } from '@angular/core';
import {NavigationStart, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  isMain: any;
  currentRoute: any;

  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationStart))
        .subscribe((event) => {
          this.currentRoute =  event;
          this.isMain = !(this.currentRoute.url === '/projects' || this.currentRoute.url === '/team' || this.currentRoute.url === '/contacts');
        });
  }
}
