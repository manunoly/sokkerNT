import { SokkerPage } from './app.po';

describe('sokker App', () => {
  let page: SokkerPage;

  beforeEach(() => {
    page = new SokkerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
