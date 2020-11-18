/*entry point of Angular app*/

// import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; //added in 3.8
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// import components
import { AppComponent } from './app.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ResultsComponent } from './results/results.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';

// import design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: ':quizId', component: QuestionsComponent },
  { path: '', redirectTo: "welcome", pathMatch: "prefix" },
];

@NgModule({

  declarations: [
    AppComponent,
    QuestionFormComponent,
    ResultsComponent,
    QuestionsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  //telling Angular to make the HttpClientModule available
    //FormsModule,         // stackoverflow: https://stackoverflow.com/questions/54976493/nullinjectorerror-no-provider-for-formbuilder-im-importing-reactiveformsmodul
    ReactiveFormsModule, // stackoverflow
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
