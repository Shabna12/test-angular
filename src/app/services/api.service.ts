import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl = "http://dummyjson.com/recipes"

  constructor(private http:HttpClient) { }

  getRecipesAPI(){
    return this.http.get(`${this.serverUrl}`)
  }
}
