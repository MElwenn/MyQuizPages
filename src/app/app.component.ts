import { Component } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Quiz, Answers, Choice } from './quiz.model';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-awesome-quiz-app';
  answers!: Answers;
  quiz!: Quiz;
  currentQuestionIndex!: number;
  //private showResults = false;
  public showResults = false;

  //constructor(private questionsService: QuestionsService) {
  constructor(public questionsService: QuestionsService) {
    this.questionsService.getJSON('maths').subscribe(data => {

      this.quiz = new Quiz('maths', data);
      this.answers = new Answers();
      this.currentQuestionIndex = 0;
    });
  }

  updateChoice(choice: Choice) {
    this.answers.values[this.currentQuestionIndex] = choice;
  }

  nextOrViewResults() {
    if (this.currentQuestionIndex === this.quiz.questions.length - 1) {
      this.showResults = true;
      return;
    }

    this.currentQuestionIndex++;
  }
}
