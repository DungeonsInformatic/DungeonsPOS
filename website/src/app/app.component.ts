import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <mat-spinner [diameter]="60" [color]="'primary'"></mat-spinner>
            <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
