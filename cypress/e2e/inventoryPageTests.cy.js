import LoginPage from "../page_objects/loginPage.spec";
import InventoryPage from "../page_objects/inventoryPage.spec";

describe('inventory page test suite', () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    const validUserName = "standard_user";
    const validPassword = "secret_sauce";
    const productName = "Sauce Labs Backpack";

    beforeEach(() => {
        loginPage.visit();
        loginPage.login(validUserName, validPassword);
    });

    it('Should display the burger menu, cart icon, and sorting dropdown', () => {
        inventoryPage.burgerMenu.should('be.visible');
        inventoryPage.cartIcon.should('be.visible');
        inventoryPage.sortDropdown.should('be.visible');
    });

    it('Should have 4 sorting options in the dropdown', () => {
        inventoryPage.getSortingOptionsCount().should('eq', 4);
    });

    it('Should open Item Page when an item is clicked by name', () => {
        inventoryPage.clickItemByIndex(4);
        cy.url().should('include', '/inventory-item.html?id=2');
    });

    it('Should open Item Page when an item is clicked by index', () => {
        inventoryPage.clickItemByName(productName);
        cy.url().should('include', '/inventory-item.html?id=4');
    });
});