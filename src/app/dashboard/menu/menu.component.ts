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
   
      <nb-icon (click)="toggle()" icon="settings-2-outline"></nb-icon>
      <button (click)="toggle()">Menu</button>
      <div class="user-menu" [@showAndHide]="toggle()">
        <nb-menu  [items]="items"></nb-menu>

      </div>
    </div>
`,
    styleUrls: ['./menu.component.scss'],
  animations: [
    // animation triggers go here
    trigger('showAndHide', [

      state('visible', style({
        opacity: '1',
      })),

      state('hidden', style({
        opacity: '0',
        display: 'none'
        
      })), 

      transition('visible => hidden', [
        animate('0.5s')
      ]),
      transition('hidden => visible', [
        style({display:'block'}),
        animate('0.5s')
      ]),
    ])
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isVisible = true; 
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
