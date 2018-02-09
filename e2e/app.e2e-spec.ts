import { Ang2DirectoryPage } from './app.po';

describe('ang2-directory App', function() {
  let page: Ang2DirectoryPage;

  beforeEach(() => {
    page = new Ang2DirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
