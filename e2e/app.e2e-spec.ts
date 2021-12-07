import { VercelExpPage } from './app.po';

describe('vercel-exp App', function() {
  let page: VercelExpPage;

  beforeEach(() => {
    page = new VercelExpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
