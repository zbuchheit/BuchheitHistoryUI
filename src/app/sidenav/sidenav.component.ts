import { Component, OnInit } from '@angular/core';
import SIDENAVITEMS from '../consts/consts';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
   sideNavTitles = SIDENAVITEMS;
  showFiller = false;
  sideNavSelected = true;

  sideNavToggle(): void{
    this.sideNavSelected = !this.sideNavSelected
  }

  ngOnInit(){
  }
}
