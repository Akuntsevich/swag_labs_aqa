class LoginPage {
    visit() {
        cy.visit('/');
    }

    get username() {
        return cy.get('[data-test="username"]');
    }

    get password() {
        return cy.get('[data-test="password"]');
    }

    get loginButton() {
        return cy.get('[data-test="login-button"]');
    }

    login(username, password) {
        this.username.type(username);
        this.password.type(password);
        this.loginButton.click();
    }

    typeUsername(username) {
        if (username) {  // Проверяем, если username не пустой
            this.username.type(username);
        }
    }

    typePassword(password) {
        if (password) {
            this.password.type(password);
        }
    }

    clickLoginButton() {
        this.loginButton.click();
    }

}

export default LoginPage;
