import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
        <div class="content-wrapper">
            <mat-spinner *ngIf="loading" [diameter]="60" [color]="'primary'"></mat-spinner>
            <router-outlet></router-outlet>
        </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = true;
  constructor(
    private router: Router
  ) { }
  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
          this.loading = true;
      }

      if (event instanceof NavigationEnd) {
          this.loading = false;
      }

      if (!(event instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
  }
}
