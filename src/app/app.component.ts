import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <app-sidenav></app-sidenav>
  <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buchheit-history';
}
