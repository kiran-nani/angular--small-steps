import { SmallStepsPage } from './app.po';

describe('small-steps App', () => {
  let page: SmallStepsPage;

  beforeEach(() => {
    page = new SmallStepsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
