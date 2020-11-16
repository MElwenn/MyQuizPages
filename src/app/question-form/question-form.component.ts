import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Question } from '../quiz.model';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-question-form',                 //defines the custom HTML element this component will render into
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  //constructor() { }

  @Input() question!: Question;  // fix ("add a !""): https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc
  @Output() onChoiceMade = new EventEmitter<string>();

  //private form!: FormGroup;  // fix ("add a !""): https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc
  public form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      choice: new FormControl()

    });

    this.form.valueChanges.subscribe(this.onChange);
  }

  onChange = () => {
    this.onChoiceMade.emit(this.form.value.choice);
  };

}
