import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Question } from './question';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class QuestionService {
  constructor (private http: Http) { }

  private devAPI = '';

  getQuestions(): Observable<Question[]> {
    return this.http.get(this.devAPI)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.result || { };
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
