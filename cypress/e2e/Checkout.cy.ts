/// <reference types='cypress'/>

import moment from 'moment';
import { HomePage } from '../page-objects/HomePage';

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
  });
});
