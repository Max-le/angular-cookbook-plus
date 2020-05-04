import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'http://localhost:8080/hello';

  // HttpClient service injection
  constructor(private httpClient: HttpClient) { }

  public get(){
    return this.httpClient.get(this.SERVER_URL);
  }
}
