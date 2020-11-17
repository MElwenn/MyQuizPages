import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ReactiveFormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  //constructor(private http: HttpClient) {
  //constructor(public http: HttpClient) { //tells Angular to inject an HttpClient into this class
  //}

  //Testing the long version
  constructor(public http: HttpClient) {
    this.http = http;
  }

  public getJSON(fileId: string) {
    return this.http.get(`./assets/${fileId}.json`) as Observable<any>;
  }
}
