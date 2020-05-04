import { Component, OnInit } from '@angular/core';

import { NbMenuItem } from "@nebular/theme";


@Component({
  selector: 'app-menu',
  template:`
   <div>
   
      <nb-icon (click)="toggle()" icon="settings-2-outline"></nb-icon>
      <button (click)="toggle()">Menu</button>
      <div *ngIf="showMenu" class="user-menu">
        <nb-menu  [items]="items"></nb-menu>
      </div>
    </div>
`,
    styleUrls: ['./menu.component.scss'],
 
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showMenu = true; 
  toggle() {
    this.showMenu = !this.showMenu; 
  }
  items: NbMenuItem[] =  [

    {
      title: 'Home',
      link:'/',
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

}
