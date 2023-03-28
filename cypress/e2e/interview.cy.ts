describe('Interview', () => {
  it('Should display elements in the list', () => {
    cy.visit('https://localhost:4200/list');
    cy.get('#list')
      .should('contain', 'The')
      .should('contain', 'elements')
      .should('contain', 'in')
      .should('contain', 'the')
      .should('contain', 'list')
      .should('contain', 'are')
      .should('contain', 'just')
      .should('contain', 'strings');
  });

  it('Should add an item', () => {
    cy.visit('https://localhost:4200/add');
    cy.get('#button').should('be.disabled');
    cy.get('#input').type('.');
    cy.get('#button').click();
    cy.get('#list-link').click();
    cy.get('#list').should('contain', '.');
  });

  it('Should be using final.step configuration', () => {
    cy.visit('https://localhost:4200/list');
    cy.get('#root').should('have.class', 'last-steps');
    cy.get('#title').should('contain', 'Interview final step');
  });

  it('Should delete an item', () => {
    cy.visit('https://localhost:4200/list');
    cy.get('#list mat-list-item:first-child button').click();
    cy.get('#list').should('not.contain', 'The');
  });
});
