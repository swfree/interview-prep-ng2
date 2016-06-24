import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

import { Question } from './question';
import { QuestionService } from './interview-prep-ng2.service';
import './rxjs-operators';


@Component({
  moduleId: module.id,
  selector: 'interview-prep-ng2-app',
  templateUrl: 'interview-prep-ng2.component.html',
  styleUrls: ['interview-prep-ng2.component.css'],
  providers: [
    QuestionService,
    HTTP_PROVIDERS
  ]
})
export class InterviewPrepNg2AppComponent implements OnInit {
  title = 'interview-prep-ng2 works!';
  questions: Question[];
  mode = 'Observable';
  errorMessage: string;

  constructor(private questionService: QuestionService) { }

  getQuestions() {
    this.questionService.getQuestions()
                        .subscribe(
                          questions => this.questions = questions,
                          error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getQuestions();
  }
}
