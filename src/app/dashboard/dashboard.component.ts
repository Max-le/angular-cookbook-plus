import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(route: string){
    // TODO : make this a function w parameter to handle all routes.
    this.router.navigateByUrl(route);
  }

}
