import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuestionFormComponent } from './question-form/question-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  //telling Angular to make the HttpClientModule available
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
