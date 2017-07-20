import { AuctionWebappPage } from './app.po';

describe('auction-webapp App', () => {
  let page: AuctionWebappPage;

  beforeEach(() => {
    page = new AuctionWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
