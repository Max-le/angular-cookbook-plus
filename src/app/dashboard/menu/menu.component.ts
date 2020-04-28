import { Component, OnInit } from '@angular/core';

import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items: NbMenuItem[] =  [
    {
      title: 'Profile',
      icon: 'person-outline',
    }
  ]

}
