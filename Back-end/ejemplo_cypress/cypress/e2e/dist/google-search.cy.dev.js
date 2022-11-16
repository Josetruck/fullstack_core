"use strict";

describe('Google Search', function () {
  it('loads search page', function () {
    cy.visit('https://www.google.com');
  });
  it('Click Aceptar Button', function () {
    cy.get('#L2AGLb > div').click();
  });
  it('searches for `remarkablemark`', function () {
    cy.get('input[name="q"]').type('remarkablemark{enter}');
  });
  it('gets first search result', function () {
    cy.get('#search a').invoke('attr', 'href').then(function (href) {
      return console.log(href);
    });
  });
});