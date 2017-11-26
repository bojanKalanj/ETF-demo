import { Website3Page } from './app.po';

describe('website3 App', () => {
  let page: Website3Page;

  beforeEach(() => {
    page = new Website3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
