import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <h1>Welcome {{userName}}</h1>
  `,
  styles: [
  ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.userName ="Max";
  }

  userName: String;

}
