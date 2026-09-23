import { test, expect } from '../fixtures/test';
test.describe('Carrito', () => {
test.beforeEach(async ({ loginPage }) => {
await loginPage.goto();
await loginPage.login('standard_user', 'secret_sauce');
});
test('anadir un producto muestra 1 en el carrito', async ({ inventoryPage }) => {
await inventoryPage.addToCart('Sauce Labs Backpack');
await expect(inventoryPage.cartBadge).toHaveText('1');
});
test('quitar el producto deja el carrito vacio', async ({ inventoryPage }) => {
await inventoryPage.addToCart('Sauce Labs Backpack');
await inventoryPage.removeFromCart('Sauce Labs Backpack');
await expect(inventoryPage.cartBadge).toHaveCount(0);
});
});