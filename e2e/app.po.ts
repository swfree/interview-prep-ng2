export class InterviewPrepNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('interview-prep-ng2-app h1')).getText();
  }
}
