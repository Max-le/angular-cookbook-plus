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
        <button (click)="redirect('auth/login')" appearance="outline" shape="round" nbButton>Login</button><br>
        <button (click)="redirect('auth/register')" appearance="outline" shape="round" nbButton>Register</button><br>
        <button (click)="redirect('about')" appearance="outline" shape="round" nbButton>Learn more</button>
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
  redirect(route: string){
    // TODO : make this a function w parameter to handle all routes.
    this.router.navigateByUrl(route);
  }

}
