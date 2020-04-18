import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-large-circle-button',
  template: `

      <button nbButton shape="round" size="giant" appearance="outline">{{text}}</button>
  `,
  styleUrls: ['./large-circle-button.component.scss']
})
export class LargeCircleButtonComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {

  }


}
