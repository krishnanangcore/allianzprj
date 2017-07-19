import { AllianzprjPage } from './app.po';

describe('allianzprj App', () => {
  let page: AllianzprjPage;

  beforeEach(() => {
    page = new AllianzprjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
