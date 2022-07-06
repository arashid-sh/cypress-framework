/// <reference types="cypress"/>

import { stringToSlug } from '../utils';

export const HomePage = {
  elements: {
    searchBar: '[data-testid="location-search-input"]',
    pickUpTile: '[data-testid="home.featured-channel.pickup-outpost-pickup"]',
  },

  selectStoreLocation(store: string): void {
    cy.get(HomePage.elements.pickUpTile).click();
    cy.get(HomePage.elements.searchBar).type(store + '{enter}');
    cy.get(
      `[data-testid="location-card-container-${stringToSlug(store)}"]`
    ).click();
    cy.get('[data-testid="menupage.warm-bowls-category"]').click();
  },

  clickOnStore(): void {},
};
