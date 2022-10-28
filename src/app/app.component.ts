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

  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationStart))
        .subscribe((event) => {
          // console.log(event.url)
        });
  }
}
