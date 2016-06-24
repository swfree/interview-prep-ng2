import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { InterviewPrepNg2AppComponent } from '../app/interview-prep-ng2.component';

beforeEachProviders(() => [InterviewPrepNg2AppComponent]);

describe('App: InterviewPrepNg2', () => {
  it('should create the app',
      inject([InterviewPrepNg2AppComponent], (app: InterviewPrepNg2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'interview-prep-ng2 works!\'',
      inject([InterviewPrepNg2AppComponent], (app: InterviewPrepNg2AppComponent) => {
    expect(app.title).toEqual('interview-prep-ng2 works!');
  }));
});
