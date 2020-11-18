// the 'model' for the app, can be injected into components as dependencies
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Quiz, Question } from './quiz.model';
import { Observable } from 'rxjs';

import { ReactiveFormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { } //tells Angular to inject an HttpClient into this class
  //constructor(public http: HttpClient) { //tells Angular to inject an HttpClient into this class
  //}

  //Testing the long version
  //constructor(public http: HttpClient) {
  //  this.http = http;
  //}

  public getQuizzes() {   //load the list of quizzes
    return this.http.get(`./assets/quiz-list.json`).pipe(
      map((result: any[]) => {
        return result.map(r => new Quiz(r.label, r.name, r.description, r.fileName));
      })
    );
  }

  public getQuestions(fileName: string) {  // load questions for a specific quiz
    return this.http.get(`./assets/${fileName}.json`).pipe(
      map((result: any[]) => {
        return result.map(r => new Question(r.label, r.choices));
      })
    );
  }

  public getJSON(fileId: string) {
    return this.http.get(`./assets/${fileId}.json`) as Observable<any>;
  }
}
