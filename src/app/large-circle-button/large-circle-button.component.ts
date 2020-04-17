import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-circle-button',
  template: `
    <p>
      large-circle-button works!
      <button class="btn-circle">50%</button>

    </p>
  `,
  styleUrls: ['./large-circle-button.component.scss']
})
export class LargeCircleButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
