import { ConfSitePage } from './app.po';

describe('conf-site App', () => {
  let page: ConfSitePage;

  beforeEach(() => {
    page = new ConfSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
