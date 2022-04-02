import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <mat-toolbar class ="footer__toolbar">
  <img
    align="center"
    class="header__img-logo"
    src="/assets/images/footer-bar.jpg"
  />
</mat-toolbar>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
