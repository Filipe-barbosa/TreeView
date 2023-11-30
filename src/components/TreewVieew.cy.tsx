import App from '@/App';
import { mount } from 'cypress/react18';

describe('<App>', () => {
  beforeEach(() => {
    mount(<App />);
  });

  it('Should display the rendered component tree.', () => {
    cy.get('.TreeViewRoot').should('exist');
    cy.get('.CheckboxRoot').should('exist');
    cy.get('.CollapsibleRoot').should('exist');
  });

  it('Should expand the tree when clicking on the expansion icon and validate if the child item exists', () => {
    mount(<App />);
    cy.get('.chevronIconContainer').first().children().click();
    cy.contains('First Children').should('exist');
  });

  it('Should click on the child icon and verify if the parens status has changed.', () => {
    mount(<App />);
    cy.get('.chevronIconContainer').first().children().click();
    cy.contains('First Children').should('exist');
    cy.get(
      '.CollapsibleRoot[data-state="open"] label.custom-label:contains("First Children")',
    )
      .first()
      .invoke('prev')
      .click();
    cy.get('.TreeViewRoot:contains("Root First Item") .CheckboxRoot').should(
      'have.attr',
      'aria-checked',
      'true',
    );
  });
});
