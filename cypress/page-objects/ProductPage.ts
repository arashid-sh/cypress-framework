/// <reference types="cypress"/>

import { stringToSlug } from '../utils';

export const ProductPage = {
  elements: {
    addToBagBtn: '[data-testid="add-to-bag-button"]',
  },

  clickAddToBagBtn(): void {
    cy.get(ProductPage.elements.addToBagBtn).click();
  },

  clickOnStore(): void {},
};
