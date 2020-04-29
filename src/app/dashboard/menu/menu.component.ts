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
      <nb-menu [@showAndHide]="isVisible ? 'visible' : 'hidden' " [items]="items"></nb-menu>
    </div>

    <p>The menu is now {{ isVisible ? 'Visible' : 'not visible' }}!</p>
    <button (click)="toggle()">Test</button>

`,
    styleUrls: ['./menu.component.scss'],
  animations: [
    // animation triggers go here
    trigger('showAndHide', [

      state('visible', style({
        opacity: '1',
        display: 'block',
      })),

      state('hidden', style({
        opacity: '0',
        display:'none',
      })), 

      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isVisible = false; 
  toggle() {
    this.isVisible = !this.isVisible; 
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
