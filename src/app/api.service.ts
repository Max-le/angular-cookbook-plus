import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'https://api.spoonacular.com';

  // HttpClient service injection
  constructor(private httpClient: HttpClient) { }
}
