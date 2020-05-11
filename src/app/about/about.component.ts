import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
