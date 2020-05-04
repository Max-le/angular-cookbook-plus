import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss']
})
export class TestAPIComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  data = [];

  ngOnInit(): void {
    this.apiService.get().subscribe((data: any[]) => {
      console.log(data);
      this.data = data;
    });
  }

}
