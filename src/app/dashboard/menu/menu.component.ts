import { Component, OnInit } from '@angular/core';

import { NbMenuItem } from "@nebular/theme";

//importing animations functions
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  template:`
   <div>
      <nb-icon icon="settings-2-outline"></nb-icon>
      <nb-menu [items]="items"></nb-menu>
    </div>
`,
    styleUrls: ['./menu.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
