import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuestionFormComponent } from './question-form/question-form.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    AppComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  //telling Angular to make the HttpClientModule available
    //FormsModule,         // stackoverflow: https://stackoverflow.com/questions/54976493/nullinjectorerror-no-provider-for-formbuilder-im-importing-reactiveformsmodul
    //ReactiveFormsModule, // stackoverflow
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
