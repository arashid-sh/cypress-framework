/// <reference types="cypress"/>

import { stringToSlug } from '../utils';

export const MenuPage = {
  elements: {},

  clickOnCategory(category: string): void {
    cy.get(`[data-testid="menupage.${stringToSlug(category)}-category`).click();
  },

  selectFirstItemsFrom(category: string): void {
    cy.get('[data-testid="menupage.warm-bowls-items"] >li').eq(0).click();
  },

  clickOnStore(): void {},
};
