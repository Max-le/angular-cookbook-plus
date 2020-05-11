import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NbToastrService } from '@nebular/theme';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  unaccessibleMessage = 'Sorry, this section is not yet available.'
  constructor(private router: Router,
              private toastrService: NbToastrService) { }

  ngOnInit(): void {
  }

  redirect(route: string){
    // TODO : make this a function w parameter to handle all routes.
    this.router.navigateByUrl(route);
  }

  showToast(position, status){
    this.toastrService.show(this.unaccessibleMessage, '👩‍🍳',
     {position, status, preventDuplicates: true});
  }

}
