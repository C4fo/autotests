describe("Тесты демо-шопа авторизация", () => {

  beforeEach(() => {                                                             // Предусловие
    cy.visit("https://www.saucedemo.com/");                    
  });

  var checkErrorMessage = (message) => {
    cy.get('[data-test="error"]').should('be.visible').and('contain', message);  // Переменная проверки текста ошибки 
  };

  it("Авторизация валид данные стандартный юзер", () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory');
  });

  it("Авторизация заблокированный юзер", () => {
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    checkErrorMessage('Epic sadface: Sorry, this user has been locked out.');
  });

  it("Авторизация проблемный юзер", () => {
    cy.get('[data-test="username"]').type('problem_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory');
  });

  it("Авторизация невалид логин", () => {
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    checkErrorMessage('Epic sadface: Username and password do not match any user in this service');
  });

  it("Авторизация невалид пароль", () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('[data-test="login-button"]').click();
    checkErrorMessage('Epic sadface: Username and password do not match any user in this service');
  });

  it("Авторизация пустые поля", () => {
    cy.get('[data-test="login-button"]').click();
    checkErrorMessage('Epic sadface: Username is required');
  });

});