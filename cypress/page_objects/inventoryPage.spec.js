class InventoryPage {

    get burgerMenu() {
        return cy.get('#react-burger-menu-btn');
    }

    get cartIcon() {
        return cy.get('[data-test="shopping-cart-link"]');
    }

    get sortDropdown() {
        return cy.get('[data-test="product-sort-container"]');
    }

    getSortingOptionsCount() {
        return cy.get('.product_sort_container').find('option').its('length');
      }

    clickItemByIndex(index) {
        cy.get('.inventory_item').eq(index).find('.inventory_item_name').click();
    }

    clickItemByName(name) {
        cy.contains('.inventory_item_name', name).click();
      }
    
}

export default InventoryPage;