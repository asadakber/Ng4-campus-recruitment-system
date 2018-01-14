import { CampusSystemPage } from './app.po';

describe('campus-system App', () => {
  let page: CampusSystemPage;

  beforeEach(() => {
    page = new CampusSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
