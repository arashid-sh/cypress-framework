/// <reference types='cypress'/>

import moment from 'moment';
import { MenuPage, HomePage } from '../page-objects';
import { ProductPage } from '../page-objects/ProductPage';

describe('test cases', () => {
  beforeEach(() => {
    // console.log(Cypress.env('BASIC_AUTH_USER'));
    cy.visit('/', {
      auth: {
        username: `${Cypress.env('BASIC_AUTH_USER')}`,
        password: `${Cypress.env('BASIC_AUTH_PASSWORD')}`,
      },
    });
  });

  it('add item to bag', () => {
    HomePage.selectStoreLocation('demo four');
    MenuPage.clickOnCategory('Warm Bowls');
    MenuPage.selectFirstItemsFrom('Warm Bowls');
    ProductPage.clickAddToBagBtn();
    cy.get('[data-testid="bag-contents"]').should(
      'contain.text',
      'Crispy Rice Bowl'
    );
  });
});
