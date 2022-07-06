import moment from 'moment';
import { HomePage } from '../page-objects/HomePage';
/// <reference types='cypress'/>

describe('test cases', () => {
  beforeEach(() => {
    cy.visit('/', {
      auth: {
        username: 'sweetgreen',
        password: 'Sw@@tgr33n!2007',
      },
    });
    cy.setCookie('OptanonAlertBoxClosed', moment().format());
  });

  it('add item to bag', () => {
    HomePage.selectStoreLocation('demo four');
    // HomePage.clickOnStore();
  });
});
