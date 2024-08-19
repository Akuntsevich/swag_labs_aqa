import LoginPage from "../page_objects/loginPage.spec.js";

describe('login test suite', () => {
    const loginPage = new LoginPage();
    const validUserName = "standard_user";
    const validPassword = "secret_sauce";
    const invalidPassword = "invalid_password";
    const invalidUsername = "invalid_username";

    beforeEach(() => {
        loginPage.visit();
    });

    it('Should login successfully with correct credentials', () => {
        loginPage.login(validUserName, validPassword);
        cy.url().should('include', '/inventory.html');
    });

    it('Should show error for incorrect password', () => {
        loginPage.typeUsername(validUserName);
        loginPage.typePassword(invalidPassword);
        loginPage.loginButton.click();
        cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
    });

    it('Should show error for missing username', () => {
        loginPage.typeUsername('');
        loginPage.typePassword(validPassword);
        loginPage.clickLoginButton();
        cy.contains('Epic sadface: Username is required').should('be.visible');
    });

    it('Should show error for missing password', () => {
        loginPage.typeUsername(validUserName);
        loginPage.typePassword('');
        loginPage.clickLoginButton();
        cy.contains('Epic sadface: Password is required').should('be.visible');
    });

    it('Should stay on the login page after failed login attempt', () => {
        loginPage.typeUsername(invalidUsername);
        loginPage.typePassword(invalidPassword);
        loginPage.clickLoginButton();
        cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
        cy.url().should('include', 'https://www.saucedemo.com/');
    });
});
