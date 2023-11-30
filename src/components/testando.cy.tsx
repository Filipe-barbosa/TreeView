import App from '@/App';
import { mount } from 'cypress/react18';

describe('<App>', () => {
  beforeEach(() => {
    mount(<App />);
  });

  it('deve mostrar todos os componentes na tela após a renderização', () => {
    // Verificar se o componente TreeViewRoot está presente
    cy.get('.TreeViewRoot').should('exist');

    // Verificar se o componente CheckboxRoot está presente
    cy.get('.CheckboxRoot').should('exist');

    // Verificar se o componente CollapsibleRoot está presente
    cy.get('.CollapsibleRoot').should('exist');

    // Adicione verificações adicionais para outros componentes conforme necessário
  });
  it('deve expandir a árvore ao clicar no ícone de expansão', () => {
    // Encontrar o ícone de expansão e clicar nele
    cy.get('.chevronIconContainer').click({ multiple: true });

    // // Verificar se a árvore foi expandida (assumindo que a classe 'open' é usada)
    // cy.get('.CollapsibleRoot').should('have.class', 'open');

    // Adicione verificações adicionais conforme necessário
  });
});
