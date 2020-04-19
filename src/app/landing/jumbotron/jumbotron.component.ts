import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  template: `
      <h1>Welcome to CookBook Plus.</h1>
      <h2>CookBook+ is a convenient virtual cooking assistant.</h2>
      <hr>
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p>
        <button appearance="outline" shape="round" nbButton>Learn more</button>
      </p>
  `,
  styles: [
  ]
})
export class JumbotronComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
