import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'r16qb8',
  e2e: {
    baseUrl: 'http://replatforming-development.sweetgreen.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: true,
    experimentalSessionAndOrigin: true,
    specPattern: 'cypress/e2e/**/*.cy.ts',
  },
});
