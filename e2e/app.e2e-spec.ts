import { RrastroAppPage } from './app.po';

describe('rrastro-app App', () => {
  let page: RrastroAppPage;

  beforeEach(() => {
    page = new RrastroAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
