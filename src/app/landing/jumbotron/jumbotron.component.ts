import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jumbotron',
  template: `
      <h1>Welcome to CookBook Plus.</h1>
      <h2>CookBook+ is a convenient virtual cooking assistant.</h2>
      <hr>
      <p>Save and organize your favorite recipes, find some refreshing ideas, and much more !</p>
      <p>
        <button appearance="outline" shape="round" nbButton>Learn more</button>
        <button (click)="redirect()" appearance="outline" shape="round" nbButton>Login</button>
        <button appearance="outline" shape="round" nbButton>Register</button>
        <button appearance="outline" shape="round" nbButton>Learn more</button>
      </p>
  `,
  styles: [
  ]
})
export class JumbotronComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}


  ngOnInit(): void {
  }
  redirect(){
    // TODO : make this a function w parameter to handle all routes.
    this.router.navigateByUrl('/login');
  }

}
