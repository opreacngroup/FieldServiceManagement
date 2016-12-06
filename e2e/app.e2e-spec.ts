import { FieldServiceManagementPage } from './app.po';

describe('field-service-management App', function() {
  let page: FieldServiceManagementPage;

  beforeEach(() => {
    page = new FieldServiceManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
