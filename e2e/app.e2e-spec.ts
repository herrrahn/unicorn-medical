import { UnicornMedicalPage } from './app.po';

describe('unicorn-medical App', () => {
  let page: UnicornMedicalPage;

  beforeEach(() => {
    page = new UnicornMedicalPage();
  });

  it('should display message saying app works', async () => {
    page.navigateTo();
    expect(await page.getParagraphText()).toEqual('app works!');
  });
});
