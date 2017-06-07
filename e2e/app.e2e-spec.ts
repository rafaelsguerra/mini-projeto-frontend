import { MiniProjetoPage } from './app.po';

describe('mini-projeto App', () => {
  let page: MiniProjetoPage;

  beforeEach(() => {
    page = new MiniProjetoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
