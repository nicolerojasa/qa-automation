import { test, expect } from '../fixtures/test';

test('ordenar por precio ascendente pone el mas barato primero', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.sortBy('lohi');
  await expect(inventoryPage.prices.first()).toHaveText('$7.99');
});