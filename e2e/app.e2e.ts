import { InterviewPrepNg2Page } from './app.po';

describe('interview-prep-ng2 App', function() {
  let page: InterviewPrepNg2Page;

  beforeEach(() => {
    page = new InterviewPrepNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('interview-prep-ng2 works!');
  });
});
