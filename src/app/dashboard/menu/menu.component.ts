import { Component, OnInit } from '@angular/core';

import { NbMenuItem } from '@nebular/theme';


@Component({
  selector: 'app-menu',
  template: `

<!--  <button nbButton (click)="toggle()">Menu</button>-->
    <nb-card (click)="toggle()">
      <nb-card-body>
        <nb-icon icon="settings-2-outline"></nb-icon>
      </nb-card-body>
    </nb-card>

     <nb-menu class="user-menu" *ngIf="showMenu" [items]="items"></nb-menu>
`,
    styleUrls: ['./menu.component.scss'],

})
export class MenuComponent implements OnInit {

  constructor() { }
  showMenu = false;
  items: NbMenuItem[] =  [

    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Profile',
      icon: 'person-outline',
    },
    {
      title: 'Change Password',
      icon: 'lock-outline',
    },
    {
      title: 'Privacy Policy',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];

  ngOnInit(): void {
  }
  toggle() {
    this.showMenu = !this.showMenu;
  }

}
